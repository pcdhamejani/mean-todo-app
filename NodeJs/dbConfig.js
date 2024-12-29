// dbConfig.js

import mongoose from 'mongoose';

export async function connect() {
    try {
        const res = await mongoose.connect("mongodb+srv://pcdhamejani:^forMONGO6@cluster0.ws1ar.mongodb.net/Todo");
        console.log("DB Connected >>>");
    } catch (err) {
        console.log(err);
    }
}

connect();