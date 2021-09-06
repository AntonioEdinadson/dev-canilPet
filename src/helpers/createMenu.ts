type MenuOptions =  '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenu = (activeMenu: MenuOptions) => {

    let typeMenu = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if(activeMenu !== '') {
        typeMenu[activeMenu] = true;
    }

    return typeMenu;
};