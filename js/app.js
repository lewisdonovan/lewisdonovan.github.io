(function(){
  'use strict';

  new WOW().init();
  
})();

(async (window, document, undefined) => {

  /*
   *
   * NAMED FUNCTIONS
   */

  // Get site by ID
  const getSite = async site => {
    const req = await fetch(`https://www.mothership.tools/wp-json/wp/v2/auto_sites/${site.id}`)
    const res = await req.json()
    return Boolean(site.id) ? {container:site.container,id:site.id,data:res} : false
  }

  // Get artist data
  const getArtist = async site => {
    if (!site) {
      return {markup: ''} 
    }
    const req = await fetch(`https://www.mothership.tools/wp-json/wp/v2/artists/${site.data.artist}`)
    const res = await req.json()
    return {container:site.container,id:site.id,data:site.data,artist:res}
  }

  // Markup
  const getSiteMarkup = async site => {
    if (!Boolean(site)) {
      return '' 
    }
    let image = ''
    if (site.artist.artist_image_square) {
      image = site.artist.artist_image_square.sizes.large
    } else if (site.artist.artist_image_square_bw) {
      image = site.artist.artist_image_square_bw.sizes.large
    } else if (site.artist.artist_image_tall) {
      site.artist.artist_image_tall.sizes.large
    } else if (site.artist.artist_og_image) {
      image = site.artist.artist_og_image
    }
    const markup = `
      <div class="col-xs-12 col-md-6 portfolio-content">
        <div class="content">
          <h3 class="title">${site.artist.name}</h3>
          <p class="excerpt">${`Website build for ${site.artist.name}`}</p>
          <a href="${site.artist.artist_website_url}" class="project-link" target="_blank">
            <button class="btn btn-default btn-lg"><i class="fa fa-globe fa-lg"></i>Visit Website</button>
          </a>
        </div>
      </div>
      <div class="col-xs-12 col-md-6 portfolio-image">
        <img src="${image}" title="${`Website build for ${site.artist.name}`}">
      </div>
    `
    return {container:site.container,markup:markup}
  }


  /*
   *
   * MAIN FLOW
   */
  let containers = await Array.from(document.querySelectorAll('.portfolio-entry'))
  containers = containers.filter(item => Boolean(item.getAttribute('data-siteid')))
  containers.forEach(container => {container.classList.add('is-site')})
  let siteIds = await containers.map(container => {
    const id = container.getAttribute('data-siteid')
    return id ? {container:container,id:id} : false
  })
  siteIds = await siteIds.filter (id => Boolean(id))
  const sites = await Promise.all(siteIds.map(getSite))
  const done = await Promise.all(sites.map(getArtist))
  const markup = await Promise.all(done.map(getSiteMarkup))
  markup.forEach(site => {
    site.container.innerHTML = site.markup
  })

})(this, this.document)