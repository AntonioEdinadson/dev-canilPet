import {Request, Response} from 'express';

export const Home = (req: Request, res: Response) => {
    res.render('home');
};

export const Dogs = (req: Request, res: Response) => {
    res.send('DOGS');
};


export const Cats = (req: Request, res: Response) => {
    res.send('CATS');
};


export const Fishes = (req: Request, res: Response) => {
    res.send('FISHES');
};
