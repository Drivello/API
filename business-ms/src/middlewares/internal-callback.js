import JWT from '../utils/JWT/index.js';
const makeInternalExpressCallback = function (controller) {
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
        try {
            if (!httpRequest.headers.Authorization) {
                res.status(403).send({ error: '403 - Forbidden' });
                return null;
            } else {
                let token = httpRequest.headers.Authorization.split(' ');
                token = token.lenght === 1 ? null : token[1];
                if (token) {
                    const tokenContent = JWT.verify(token);
                    if (
                        !tokenContent.isAuthorized ||
                        !['USER_MS', 'OTHER_MS'].includes(tokenContent.MS)
                    ) {
                        res.status(403).send({ error: '403 - Forbidden' });
                        return null;
                    }
                } else {
                    res.status(403).send({ error: '403 - Forbidden' });
                    return null;
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
        } catch (error) {
            res.status(500).send({ error : error.message });
        }
    };
};
export default makeInternalExpressCallback;
