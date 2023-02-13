import JWT from '../JWT/index.js';
const makeExpressCallback = function (controller) {
    return (req, res) => {
        const httpRequest = {
            body: req.body,
            query: req.query,
            params: req.params,
            ip: req.ip,
            method: req.method,
            path: req.path,
            headers: {
                'Content-Type': req.get('Content-Type'),
                'User-Agent': req.get('User-Agent'),
                Authorization: req.get('Authorization'),
            },
        };
        if (!httpRequest.headers.Authorization){
          const token = req.get('Authorization').split(' ')[1];
          const tokenContent = JWT.verify(token);
          if(!tokenContent.isAuthorized){
            res.status(401).send('401 - Unauthorized');
          }
        }
        controller(httpRequest)
            .then((httpResponse) => {
                if (httpResponse.headers) {
                    res.set(httpResponse.headers);
                }
                res.type('json');
                res.status(httpResponse.statusCode).send(httpResponse.body);
            })
            .catch((e) =>
                res.status(500).send({ error: 'An unkown error occurred.' })
            );
    };
};
export default makeExpressCallback;
