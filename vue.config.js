module.exports = {
    devServer:{
        // open:true
        proxy:{
            "/ele":{
                target:"http://127.0.0.1",
                changeOrigin:true,
                pathRewrite:{
                    "^/ele":""
                }
            }
        }
    }
}

