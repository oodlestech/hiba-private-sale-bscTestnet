import React from 'react'

export const storageGet = (key) => {
    var object = window.localStorage.getItem(key);
    return JSON.parse(object);
};

export const storageSave = (key, object) => {
    object = JSON.stringify(object);
    return window.localStorage.setItem(key, object);
};

export const storageDelete = (key) => {
    return window.localStorage.removeItem(key);
};

export const storageEmpty = () => {
    return window.localStorage.clear();
}
