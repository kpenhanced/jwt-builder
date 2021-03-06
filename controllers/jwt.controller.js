import { JwtService } from '../services';

export const fnSignJwtToken = (req, res) => {
    try {
        const jwt = new JwtService(req.body);
        const token = jwt.sign();
        return res.status(200).json({ status: 200, token });
    } catch (error) {
        logger.error(error);
        return res.status(500).json({ status: 500, message: error.name, message: error.message });
    }
}

export const fnVerifyJwtToken = (req, res) => {
    try {
        const jwt = new JwtService(req.body);
        const decoded = jwt.verify();
        return res.status(200).json({ status: 200, decoded });
    } catch (error) {
        logger.error(error);
        return res.status(500).json({ status: 500, message: error.name, message: error.message });
    }
}