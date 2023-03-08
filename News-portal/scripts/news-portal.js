
let fetchData = [];
 const fetchCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
      .then(response => response.json())
      .then(json => showCategories(json.data.news_category))

 }
 const showCategories= data =>{
    const categoriesContainer = document.getElementById('categories-container');
    data.forEach(singleCategories => {
        // console.log(singleCategories);
        categoriesContainer.innerHTML += `<a class="nav-link" href="#" onclick="fetchCategoryNews('${singleCategories.category_id}', '${singleCategories.category_name}')">${singleCategories.category_name}</a>`;


    });
 }

// fetch all newses available in a category
const fetchCategoryNews = (category_id, category_name) => {
    // console.log(category_id);
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
          fetchData = data.data;
          showAllNews(data.data, category_name)
        // console.log(data.data, category_name);
      });
  };
  const showAllNews = (data, category_name) =>{
        document.getElementById('news-count').innerHTML = data.length;
        document.getElementById('category-name').innerHTML = category_name;
        const newscontainer = document.getElementById('all-news');
        newscontainer.innerHTML= "";
        data.forEach(singleNews => {
          const { _id, image_url, title, details, author, total_view,rating } = singleNews;


          const card =  document.createElement('div');
          card.classList.add("card","mb-3","g-3");


            console.log(image_url);
            newscontainer.innerHTML += `
            
            <div class="row g-4 mb-4">
    <div class="col-md-4 g-3">
      <img src=${image_url} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8 d-flex flex-column">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">
          ${details.slice(0, 200)}...
        </p>
        
      </div>
      <div class="card-footer border-0 bg-body d-flex justify-content-between">
        <div class="d-flex gap-2">
        <img src=${
          author.img
        } class="img-fluid rounded-circle" alt="..." height="40" width="40"/>
        <div>
        <p class="m-0 p-0">${author.name ? author.name : "Not available" }</p>
        <p class="m-0 p-0">${author.published_date}</p>
        </div>
        
        </div>
        <div class="d-flex align-items-center">
        <i class="fas fa-eye"></i>
        
        <p class="m-0 p-0">${total_view ? total_view : "Not available"}</p>
        </div>
        <div class="d-flex gap-2">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half"></i>
       
        <p>${rating.number}</p>
        </div>
        <div>
        
        <i class="fas fa-arrow-right" onclick="fetchNewsDetail('${_id}')" data-bs-toggle="modal"
        data-bs-target="#exampleModal"></i>
        </div>
      </div>
    </div>
  </div>
  <div>
            
            `;

        })


  }

  const fetchNewsDetail = (news_id) => {
    let url = `https://openapi.programming-hero.com/api/news/${news_id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        showNewsDetail(data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const showNewsDetail = newsDetail =>{
    const { _id, image_url, title, details, author, total_view,rating } = newsDetail;

  const modal =   document.getElementById('modal-body');
  modal.innerHTML="";

    
   modal.innerHTML += `
    <div class="row g-4 mb-4">
    <div class="col-md-4 g-3">
      <img src=${image_url} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8 d-flex flex-column">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">
          ${details.slice(0, 200)}...
        </p>
        
      </div>
      <div class="card-footer border-0 bg-body d-flex justify-content-between">
        <div class="d-flex gap-2">
        <img src=${
          author.img
        } class="img-fluid rounded-circle" alt="..." height="40" width="40"/>
        <div>
        <p class="m-0 p-0">${author.name ? author.name : "Not available" }</p>
        <p class="m-0 p-0">${author.published_date}</p>
        </div>
        
        </div>
        <div class="d-flex align-items-center">
        <i class="fas fa-eye"></i>
        
        <p class="m-0 p-0">${total_view ? total_view : "Not available"}</p>
        </div>
        <div class="d-flex gap-2">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star-half"></i>
       
        <p>${rating.number}</p>
        </div>
    
    
    `;

  }

  // show trending news
const showTrending=()=>{
  const trendingNews = fetchData.filter(singleData => singleData.others_info.is_trending === true);
  const category_name = document.getElementById("category-name").innerText;
  showAllNews(trendingNews, category_name);

}