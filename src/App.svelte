<main>
  <div class="navbar bg-base-100 sticky top-0 z-10 p-2">
    <div class="flex-none">
      <label for="my-drawer" class="btn btn-square btn-ghost drawer-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon inline-block w-5 h-5 stroke-current" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <line x1="3" x2="21" y1="12" y2="12" />
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
      </label>
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost text-xl font-figtree no-animation">Kruistz's Page</a>
    </div>
    <div class="flex-none">
      <label class="swap swap-rotate btn-square btn-ghost">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" class="theme-controller" value="dark" />

        <!-- sun icon -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon swap-off stroke-current w-5 h-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <circle cx="12" cy="12" r="5" />
          <line x1="12" x2="12" y1="1" y2="3" />
          <line x1="12" x2="12" y1="21" y2="23" />
          <line x1="4.22" x2="5.64" y1="4.22" y2="5.64" />
          <line x1="18.36" x2="19.78" y1="18.36" y2="19.78" />
          <line x1="1" x2="3" y1="12" y2="12" />
          <line x1="21" x2="23" y1="12" y2="12" />
          <line x1="4.22" x2="5.64" y1="19.78" y2="18.36" />
          <line x1="18.36" x2="19.78" y1="5.64" y2="4.22" />
        </svg>

        <!-- moon icon -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon swap-on fill-current w-5 h-5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </label>
    </div>
  </div>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <!-- Page content here -->
    </div>
    <div class="drawer-side z-50">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu p-2 w-80 min-h-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li><a class="drawer-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon w-5 h-5 fill-stroke mr-1.5 ml-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>Home</a></li>
        <li><a class="drawer-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon w-5 h-5 fill-stroke mr-1.5 ml-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
            <rect height="9" width="3" x="7" y="7" />
            <rect height="5" width="3" x="14" y="7" />
          </svg>Projects</a></li>
        <li>
          <a class="drawer-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="main-grid-item-icon w-5 h-5 fill-stroke mr-1.5 ml-2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            Gallery</a></li>
      </ul>
    </div>
  </div>
  <section class="body-font">
    <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-left text-left">
        <h1 class="title-font text-4xl mb-4 font-figtree font-bold">Hello, I'm Kruistz!</h1>
        <p class="mb-8 leading-normal font-figtree text-lg">An hobbyist coder who likes to play gacha games. I also like to take photos too!</p>
      <div class="flex justify-center">
        <button class="inline-flex btn btn-sm btn-primary">Button</button>
        <button class="ml-4 inline-flex btn btn-sm">Button</button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    </div>
  </div>
  </section>
</main>