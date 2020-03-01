const request = require('supertest');
const express = require('express');


const app = express();

describe('Sfeir Schools app', () => {

    it('"Le get doit renvoyer un code 200"', () => {
        expect("StatusCode").toHaveBeenCalledWith('200');
    });
    it('Le body doit être vide'), () => {
        expect("").toHaveBeenCalledWith([]);
    }
});
