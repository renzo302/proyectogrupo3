const cartStorageKey = 'gamehub-cart';
const money = amount => `$${Number(amount).toFixed(2)}`;

function readCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(cartStorageKey) || '[]');
    return Array.isArray(savedCart) ? savedCart : [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(cartStorageKey, JSON.stringify(cart));
  renderCart();
}

function renderCart() {
  const itemsContainer = document.getElementById('cart-items');
  const emptyState = document.getElementById('cart-empty');
  const cartLayout = document.getElementById('cart-layout');
  const countElement = document.getElementById('cart-count');
  const summaryCount = document.getElementById('cart-count-summary');
  const totalElement = document.getElementById('cart-total');
  const cart = readCart();
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (countElement) countElement.textContent = `${itemCount} ${itemCount === 1 ? 'producto' : 'productos'}`;
  if (summaryCount) summaryCount.textContent = itemCount;
  if (totalElement) totalElement.textContent = money(total);
  if (emptyState) emptyState.hidden = cart.length > 0;
  if (cartLayout) cartLayout.hidden = cart.length === 0;
  if (!itemsContainer) return;

  itemsContainer.replaceChildren();
  cart.forEach(item => {
    const row = document.createElement('article');
    row.className = 'cart-item';

    const image = document.createElement('img');
    image.className = 'cart-item__image';
    image.src = item.image;
    image.alt = `Portada de ${item.name}`;

    const details = document.createElement('div');
    details.className = 'cart-item__details';
    const name = document.createElement('h2');
    name.textContent = item.name;
    const price = document.createElement('p');
    price.textContent = `${money(item.price)} por unidad`;
    details.append(name, price);

    const controls = document.createElement('div');
    controls.className = 'cart-item__controls';
    controls.append(
      createCartAction('decrease', item.id, '−', `Reducir cantidad de ${item.name}`),
      createCartValue(item.quantity),
      createCartAction('increase', item.id, '+', `Aumentar cantidad de ${item.name}`),
      createCartAction('remove', item.id, 'Quitar', `Quitar ${item.name} del carrito`)
    );

    const lineTotal = document.createElement('strong');
    lineTotal.className = 'cart-item__total';
    lineTotal.textContent = money(item.price * item.quantity);
    row.append(image, details, controls, lineTotal);
    itemsContainer.append(row);
  });
}

function createCartAction(action, id, label, accessibleLabel) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = `cart-action cart-action--${action}`;
  button.dataset.cartAction = action;
  button.dataset.productId = id;
  button.setAttribute('aria-label', accessibleLabel);
  button.textContent = label;
  return button;
}

function createCartValue(quantity) {
  const value = document.createElement('span');
  value.className = 'cart-item__quantity';
  value.textContent = quantity;
  return value;
}

function addProduct(button) {
  const product = button.closest('.game-card, .offer-card, .detalle-hero');
  const name = product?.querySelector('h1, h3')?.textContent.trim();
  const priceText = product?.querySelector('.detalle-price-current, .offer-card__prices strong, .game-card__bottom > strong')?.textContent;
  const image = product?.querySelector('.detalle-hero__image, .game-card__image img, .offer-card > img');
  const price = Number(priceText?.match(/[0-9]+(?:\.[0-9]{1,2})?/)?.[0]);

  if (!name || !image || !Number.isFinite(price)) return;

  const id = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const cart = readCart();
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id, name, price, image: image.currentSrc || image.src, quantity: 1 });
  }

  saveCart(cart);
  const originalText = button.textContent;
  button.textContent = 'Agregado';
  window.setTimeout(() => { button.textContent = originalText; }, 1000);
}

document.querySelectorAll('[data-cart-add]').forEach(button => {
  button.addEventListener('click', () => addProduct(button));
});

document.getElementById('cart-items')?.addEventListener('click', event => {
  const button = event.target.closest('[data-cart-action]');
  if (!button) return;

  const { cartAction, productId } = button.dataset;
  let cart = readCart();
  const item = cart.find(product => product.id === productId);
  if (!item) return;

  if (cartAction === 'increase') item.quantity += 1;
  if (cartAction === 'decrease') item.quantity -= 1;
  if (cartAction === 'remove' || item.quantity < 1) {
    cart = cart.filter(product => product.id !== productId);
  }
  saveCart(cart);
});

document.getElementById('cart-clear')?.addEventListener('click', () => saveCart([]));
renderCart();
