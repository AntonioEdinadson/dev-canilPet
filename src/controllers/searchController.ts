import {Request, Response} from 'express';

import {Pet} from '../models/petModel';
import {createMenu} from '../helpers/createMenu';

export const Search = (req: Request, res: Response) => {

    let query:string = req.query.q as string;
    
    let list = Pet.getOnName(query);
    
    res.render('pages/home', {
        list: list,
        banner: null,
        menu: createMenu(''),     
        query   
    });
};