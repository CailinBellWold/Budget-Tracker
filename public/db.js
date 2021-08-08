let db;
const request = indexedDB.open('budget', 1);

function checkForIndexedDb() {
  indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

  if (!window.indexedDB) {
    console.log(`Your browser doesn't support a stable version of IndexedDB.`);
    return false;
  }
  return true;
}

request.onupgradeneeded = ({ target }) => {
  let db = target.result;
  db.createObjectStore('pending', { autoIncrement: true });
  console.log('Created Pending Item in Object Store');
};

request.onsuccess = ({ target }) => {
  db = target.result;

  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function(event) {
  console.log('Woops! ' + event.target.errorCode);
};

function saveRecord(record) {
  const transaction = db.transaction(['pending'], 'readwrite');
  const store = transaction.objectStore('pending');

  store.add(record);
}

function checkDatabase() {
  const transaction = db.transaction(['pending'], 'readwrite');
  const store = transaction.objectStore('pending');
  const getAll = store.getAll();

  getAll.onsuccess = function() {
    if (getAll.result.length > 0) {
      fetch('/api/transaction/bulk', {
        method: 'POST',
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        return response.json();
      })
      .then(() => {
        const transaction = db.transaction(['pending'], 'readwrite');
        const store = transaction.objectStore('pending');
        store.clear();
      });
    }
  };
  }

window.addEventListener('online', checkDatabase);
