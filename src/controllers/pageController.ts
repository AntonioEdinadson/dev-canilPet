import {Request, Response} from 'express';

import {createMenu} from '../helpers/createMenu';
import {Pet} from '../models/petModel';

export const Home = (req: Request, res: Response) => {

    let list = Pet.getAll();

    res.render('pages/home', {
        menu: createMenu('all'),
        list: list,
        query: '',
        banner: {
        title: 'Todos os Animais', 
        background: 'allanimals.jpg',        
    }});
};

export const Dogs = (req: Request, res: Response) => {

    let list = Pet.getOnType('dog');

    res.render('pages/home', {
        menu: createMenu('dog'),
        list: list,
        query: '',
        banner: {
        title: 'Cachorros', 
        background: 'banner_dog.jpg',
    }});
};


export const Cats = (req: Request, res: Response) => {

    let list = Pet.getOnType('cat');

    res.render('pages/home', {
        menu: createMenu('cat'),
        list: list,
        query: '',
        banner: {title: 'Gatos', 
        background: 'banner_cat.jpg',
    }});
};


export const Fishes = (req: Request, res: Response) => {

    let list = Pet.getOnType('fish');

    res.render('pages/home', {
        menu: createMenu('fish'),
        list: list,
        query: '',
        banner: {
            title: 'Peixes', 
            background: 'banner_fish.jpg',
        }});
};
