import NodeCache from 'node-cache';
import { v4 as uuidv4 } from 'uuid';

const cache = new NodeCache({
  stdTTL: 0,
  useClones: false,
  deleteOnExpire: true,
  maxKeys: 100,
});

const initialData = [
  {
    uuid: uuidv4(),
    title: 'The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    status: 'read',
  },
  {
    uuid: uuidv4(),
    title: 'The Two Towers',
    author: 'J.R.R. Tolkien',
    status: 'reading',
  },
  {
    uuid: uuidv4(),
    title: 'The Return of the King',
    author: 'J.R.R. Tolkien',
    status: 'to_read',
  },
];

initialData.forEach((book) => {
  cache.set(book.uuid, book);
});

export default cache;
