const cf = require('./cf.json');
const {VM} = require('vm2');
const moment = require('moment');
const fs = require('fs');
let axios = require('axios');
let crypto = require('crypto');
let dbm = require('@ng.huyy/dbm');
const MySql = require('@ng.huyy/mysqlconn');
let vmTask = (filename, params) => {
    return new Promise(async (resolve, reject) => {
        const vm = new VM({
            require: {
                external: false,
            },
            timeout: 20000,
            eval: false,
            wasm: false,
            sandbox: {
                IOTA: params,
                out: null,
                MySql: MySql,
                Db: null,
                Time: require('moment'),
                crypto: crypto,
                TelegramSend: (msg) => {
                    console.log(msg);
                },
                web: {
                    get: async (url) => {
                        let result = await axios.get(url);
                        return result.data;
                    },
                    post: async (url, postdata, options) => {
                        let result = await axios.post(url, postdata, options);
                        return result.data;
                    }
                }
            }
        });
        let pretime = moment();
        try {
            await vm.run(fs.readFileSync(filename).toString("utf-8"));
            try {
                await vm.sandbox.Db.Conn.end();
            } catch (e) {
            }
            let aftertime = moment() - pretime;
            resolve({r: vm.sandbox.out, exectime: aftertime});
        } catch (e) {
            reject(e);
        }
    });
}

async function doCmd() {
    try {
        let vmresult = await vmTask(cf.project, {
            user: cf.user,
            phone_act: cf.phone_act,
            mess: cf.mess
        });
        console.log(vmresult);
    } catch (reason) {
        console.log(reason);
    }
}

doCmd().then(value => {
    process.exit();
});