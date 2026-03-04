
// Create sample IndexedDB data
const dbRequest = indexedDB.open('HuitShopDB', 1);
dbRequest.onupgradeneeded = (event) => {
  const db = event.target.result;

  // Customers store
  const customerStore = db.createObjectStore('customers', { keyPath: 'id' });
  customerStore.add({ id: 'C001', name: 'Juan Dela Cruz', motorcycle: 'Raider 150' });
  customerStore.add({ id: 'C002', name: 'Maria Santos', motorcycle: 'Honda XR150L' });
  customerStore.add({ id: 'C003', name: 'Carlos Reyes', motorcycle: 'Yamaha FZ 150' });

  // Services store
  const serviceStore = db.createObjectStore('services', { keyPath: 'id' });
  serviceStore.add({ id: 'S001', name: 'Oil Change', price: 250 });
  serviceStore.add({ id: 'S002', name: 'Brake Adjustment', price: 200 });
  serviceStore.add({ id: 'S003', name: 'Chain Lubrication', price: 100 });
  serviceStore.add({ id: 'S004', name: 'Engine Check', price: 500 });

  // Parts store
  const partsStore = db.createObjectStore('parts', { keyPath: 'id' });
  partsStore.add({ id: 'P001', name: 'Spark Plug', supplier: 'Supplier A', qty: 10, price: 200 });
  partsStore.add({ id: 'P002', name: 'Brake Pad', supplier: 'Supplier B', qty: 15, price: 250 });
  partsStore.add({ id: 'P003', name: 'Chain', supplier: 'Supplier C', qty: 5, price: 600 });

  // Pending Jobs store
  const jobsStore = db.createObjectStore('pending_jobs', { keyPath: 'id' });
  jobsStore.add({ id: 'J001', customer: 'Juan Dela Cruz', status: 'Pending', mechanic: 'Ben', date: '2026-03-05' });
  jobsStore.add({ id: 'J002', customer: 'Maria Santos', status: 'Pending', mechanic: 'Anna', date: '2026-03-06' });

  // Supplier Requests store
  const supplierStore = db.createObjectStore('supplier_requests', { keyPath: 'id' });
  supplierStore.add({ id: 'SR001', part: 'Carburetor', supplier: 'Supplier D', status: 'Needed' });
  supplierStore.add({ id: 'SR002', part: 'Brake Fluid', supplier: 'Supplier B', status: 'Needed' });
};
