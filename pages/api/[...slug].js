import httpProxyMiddleware from 'next-http-proxy-middleware'

export default async function callApi(req, res) {
  return httpProxyMiddleware(req, res, {
    target: 'https://pokeapi.co/api/v2/',
    pathRewrite: [
      {
        patternStr: '^/api',
        replaceStr: '',
      },
    ],
  })
}
