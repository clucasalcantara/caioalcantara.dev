module.exports = {
  apps: [
    {
      name: 'new.caioalcantara.dev',
      script: 'npx',
      interpreter: 'none',
      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: 'serve build -s -p 4001',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
