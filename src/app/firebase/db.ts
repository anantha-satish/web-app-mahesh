import { getDatabase, ref, get } from 'firebase/database';
import fbInitialize from './firebaseConfig'; // Adjust the path as needed to your firebase fbInitialize initialization

const database = () => getDatabase(fbInitialize);

export const getRiddles = async () => {
    try {
        const db = database();
        const snapshot = await get(ref(db, '/riddles'));
        const polls = snapshot.val() ? Object.entries(snapshot.val()).map(([id, data]) => ({ id, ...data })) : [];
        return polls.reverse();
    } catch (error) {
        console.error('Error fetching user data: ', error);
    }
};

export const getJokes = async () => {
    try {
        const db = database();
        const snapshot = await get(ref(db, '/jokes'));
        const polls = snapshot.val() ? Object.entries(snapshot.val()).map(([id, data]) => ({ id, ...data })) : [];
        return polls.reverse();
    } catch (error) {
        console.error('Error fetching user data: ', error);
    }
};


export const getDrafts = async () => {
    try {
        const db = database();
        const snapshot = await get(ref(db, '/drafts'));
        const polls = snapshot.val() ? Object.entries(snapshot.val()).map(([id, data]) => ({ id, ...data })) : [];
        return polls.reverse();
    } catch (error) {
        console.error('Error fetching user data: ', error);
    }
};

export const getUsers = async () => {
    try {
        const db = database();
        const snapshot = await get(ref(db, '/users'));
        const users = snapshot.val() ? Object.entries(snapshot.val()).map(([id, data]) => ({ id, ...data })) : [];
        return users;
    } catch (error) {
        console.error('Error fetching user data: ', error);
    }
};