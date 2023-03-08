const loadtools = async () => {
  const url = 'https://openapi.programming-hero.com/api/ai/tools';
  try {
    const res = await fetch(url);
    const data = await res.json();
    showtools(data.data.tools);
  } catch (error) {
    console.log(error);
  }
};

const showtools = (data) => {
  const mainDiv = document.getElementById('table-container');
  const short = document.getElementById('short');
  const showMore = document.getElementById('showMore');
  const noMoreProducts = document.getElementById('noMoreProducts');

  let cardsToShow = 6;
  let endIndex = cardsToShow;
  
  showMore.addEventListener('click', () => {
    cardsToShow += 12;
    endIndex = Math.min(cardsToShow, data.length);
    showCards();
  });

  const showCards = () => {
    mainDiv.innerHTML = '';
    for (let i = 0; i < endIndex; i++) {
      const tool = data[i];
      const [month, day, year] = tool.published_in.split('/');
      const formattedDate = `${month}/${day.padStart(2, '0')}/${year}`;
      // console.log(tool.id);
      mainDiv.innerHTML += `
        <div class="card p-3">
          <img src="${tool.image}" class="card-img-top rounded" alt="...">
          <div class="card-body">
            <h5 class="card-title">Features</h5>
            <ol>
              <li>${tool.features[0]}</li>
              <li>${tool.features[1]}</li>
              <li>${tool.features[2] ? tool.features[2] : 'no data found'}</li>
            </ol>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <div>
              <h5 class="card-title">${tool.name}</h5>
              <small class="text-muted"><i class="fa-regular fa-calendar-days"></i> ${formattedDate}</small>
            </div>
            <div>
              <i class="fa-solid fa-arrow-right" onclick ="fetchAiDetail('${tool.id}') " data-bs-toggle="modal"
              data-bs-target="#exampleModal" ></i>
            </div>
          </div>
        </div>
      `;
    }

    if (endIndex === 0) {
      noMoreProducts.style.display = 'block';
      showMore.style.display = 'none';
    } else if (endIndex >= data.length) {
      noMoreProducts.style.display = 'none';
      showMore.style.display = 'none';
    } else {
      noMoreProducts.style.display = 'none';
      showMore.style.display = 'block';
    }
  };

  showCards();
};



const fetchAiDetail = (id) => {
  let url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showAiDetail(data.data));
};

const  showAiDetail =  (aiDetail) =>{
  console.log(((aiDetail.accuracy.score)*100).toFixed() + "%");
  // const {aiDetail } = aiDetail;

    const body = document.getElementById('modal-body');
    body.innerHTML = '';
    body.innerHTML  += `
  <div class=" >
  
  <div>
  <div class="card p-3 " style="width: 550px;">
  <div class="card-body ">
    <h5 class="card-title">${aiDetail.description}</h5>
    <section class=" d-flex g-4 mt-1">
    <div class="bg-danger p-3" style="width: 100px; height:130px;" >
      <div class = "text-center text-wrap ">${aiDetail.pricing[0].price !== "No cost" && aiDetail.pricing[0].price != "0"  ? aiDetail.pricing[0].price:" free of coust"}</div>
      <div class = "text-center text-wrap "> "Basic"</div>
    </div>
    <div class="bg-danger mx-1 p-3" style="width: 100px; height:130px;" >
    <div class = "text-center text-wrap ">${aiDetail.pricing[1].price !== "No cost" ? aiDetail.pricing[1].price:" free coust"}</div>
    <div class = "text-center text-wrap ">  "Pro"</div>
    
    </div>
    <div class="bg-danger p-3" style="width: 100px; height:130px;" >
    
    <div class = "text-center text-wrap ">${aiDetail.pricing[2].price !== "No cost" ? aiDetail.pricing[2].price:" free of coust"}</div>
    <div class = "text-center text-wrap ">  "Enterprise"</div>
    
    </div>
    </section>
    <section class="row">
      <div class =" col-6">
      <h5>Features</h5>
      <ul>
      <li>${aiDetail.features["1"].feature_name}</li>
      <li>${aiDetail.features["2"].feature_name}</li>
      <li>${aiDetail.features["3"].feature_name}</li>
      </ul>
      
      </div>
      <div  class =" col-6">
      <h5>Integrations</h5>
      <ul>
      <li>${aiDetail.integrations[0]}</li>
      <li>${aiDetail.integrations[1]}</li>
      <li>${aiDetail.integrations[2]}</li>
      </ul>
      
      
      </div>
    
    </section>

  </div>
</div>
  </div>
  <div>
  <p class=" bg-danger text-center" style="color:white ">${((aiDetail.accuracy.score)*100).toFixed() + "%"} accuracy</p>
  <div class="card" style="width: 18rem;">
  <img src="${aiDetail.image_link[0]}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${aiDetail.input_output_examples[0].input?aiDetail.input_output_examples[0].input:"Can you give any example?"}</h5>
    <p class="card-text">${aiDetail.input_output_examples[0].output?aiDetail.input_output_examples[0].output:"No! Not Yet! Take a break!!!"}</p>
  </div>
</div>
  
  </div>
  
  
  
  </div>


  `;

}