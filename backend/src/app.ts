import configs from './configs';
import Koa, {Context, Next} from 'koa';
import {bootstrapControllers} from 'koa-ts-controllers';
import KoaRouter from 'koa-router';
import path from 'path';
import KoaBody from 'koa-body';
import {Sequelize} from 'sequelize-typescript';
import jwt from 'jsonwebtoken';



(async () => {
    const app = new Koa();
    const router = new KoaRouter();

    const db = new Sequelize({
        ...configs.database,
        models: [__dirname + '/models/**/*']
    });

    app.use( async (ctx: Context, next: Next) => {
        let token = ctx.headers['authorization'];
        if (token) {
            ctx.userInfo = jwt.verify( token, configs.jwt.privateKey) as UserInfo
        }
        await next();
    })

    // 注册路由
    await bootstrapControllers(app, {
        router,
        basePath: '/api',
        versions: [1],
        controllers: [
            path.resolve( __dirname, 'controllers/**/*')
        ],
        errorHandler: async (err: any, ctx: Context) => {
            console.log(err);
            let status = 500;
            let body: any = {
                statusCode: status,
                error: "Internal Server error",
                message: "An internal server error occurred"
            }
            if (err.output) {
                status = err.output.statusCode;
                body = {...err.output.payload};
                if (err.data) {
                    body.errorDetails = err.data
                }
            }
            ctx.status = status
            ctx.body = body
        }
    });
    // router.all('*', async ctx=>{
    //     throw Boom.notFound('没有该路由')
    // })
    app.use( KoaBody() );
    app.use( router.routes());
    app.listen( configs.server.port, configs.server.host, ()=>{
        console.log(`服务启动成功: http://${configs.server.host}:${configs.server.port}`)
    })

})();