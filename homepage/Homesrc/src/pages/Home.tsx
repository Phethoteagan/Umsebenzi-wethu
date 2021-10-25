import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton,IonGrid, IonRow, IonCol} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import cleaning from './cleaning.jpg'
import farming from './farming.jpg'
import plumbing from './plumbing.jpg'
import gardening from './gardening.jpg'
import babysitting from './babysitting.jpg'
import painting from './painting.jpg'

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <IonGrid fixed={true} className='grid'>
            <div className='buttons'>
            <IonCol><IonButton color="dark" className='but1'>Cleaning</IonButton></IonCol>
            <IonCol><IonButton color="dark" className='but2'>Plumbing</IonButton></IonCol>
            <IonCol><IonButton color="dark" className='but3'>Gardening</IonButton></IonCol>
            <IonCol><IonButton color="dark" className='but4'>Nursing</IonButton></IonCol>
            <IonCol><IonButton color="dark" className='but5'>Catering</IonButton></IonCol>
            <IonCol><IonButton color="dark" className='but6'>Construction</IonButton></IonCol>
            <IonCol><IonButton color="dark" className='but7'>Electrical Appliances</IonButton></IonCol>
            </div>
            </IonGrid>



          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className='background'>

       <IonGrid fixed={true} className="grid2" >
       <IonRow>
      <IonCard color="light" className="flip-card">
         <IonCardContent className="flip-card-inner">
              <div className="flip-card-front">
                <img src={cleaning} alt="Cleaning" ></img>
                <div className="caption">Cleaner For Living Room Needed</div>
                </div>
                <div className="flip-card-back">
                <h1>Required Skills: </h1>
                <p>Thourouly Sweeping</p>
                <p>Vacuuming</p>
                <p>(Location: Soweto)</p>
                <button className="Apply">Apply</button>
              </div>
            </IonCardContent>
      </IonCard>
     
      <IonCard color="light" className="flip-card2">
         <IonCardContent className="flip-card-inner2">
              <div className="flip-card-front2">
                <img src={farming} alt="farming" width='600px' height='232px'></img>
                <div className="caption2">Farmer Needed ASAP</div>
                </div>
                <div className="flip-card-back2">
                <h1>Required Skills:</h1>
                <p>Plaughing</p>
                <p>Plantation</p>
                <p>(Location: Midrand)</p>
                <button className="Apply2">Apply</button>
              </div>
            </IonCardContent>
      </IonCard>
      
      <IonCard color="light" className="flip-card3">
         <IonCardContent className="flip-card-inner3">
              <div className="flip-card-front3">
                <img src={plumbing} alt="plumbing" ></img>
                <div className="caption3">Plumber Needed For Kitchen Sink</div>
                </div>
                <div className="flip-card-back3">
                <h1>Required Skills:</h1>
                <p>Pipe analysis</p>
                <p>drain unblocking</p>
                <p>(Location: Johannesburg North)</p>
                <button className="Apply3">Apply</button>
              </div>
            </IonCardContent>
      </IonCard>
      </IonRow>
      <IonRow>
    
      <IonCard color="light" className="flip-card4">
         <IonCardContent className="flip-card-inner4">
              <div className="flip-card-front4">
                <img src={gardening} alt="gardening" height='240px' ></img>
                <div className="caption4">3 Gardeners Needed</div>
                </div>
                <div className="flip-card-back4">
                <h1>Required Skills:</h1>
                <p>Seed Planting</p>
                <p>Repotting</p>
                <p>(Location: Aukland Park Johannesburg)</p>
                <button className="Apply4">Apply</button>
              </div>
            </IonCardContent>
      </IonCard>
      
      <IonCard color="light" className="flip-card5">
         <IonCardContent className="flip-card-inner5">
              <div className="flip-card-front5">
                <img src={babysitting} alt="babysitting" height='240px'></img>
                <div className="caption5">Babysitter Needed for 12 Year old</div>
                </div>
                <div className="flip-card-back5">
                <h1>Required Skills:</h1>
                <p>Vigilant</p>
                <p>Nurturing</p>
                <p>(Location: Braamfontein)</p>
                <button className="Apply5">Apply</button>
              </div>
            </IonCardContent>
      </IonCard>
      <IonCard color="light" className="flip-card6">
         <IonCardContent className="flip-card-inner6">
              <div className="flip-card-front6">
                <img src={painting} alt="painting" ></img>
                <div className="caption6">Painter For New House Needed</div>
                </div>
                <div className="flip-card-back6">
                <h1>Required Skills:</h1>
                <p>Mixing colors</p>
                <p>Outlining</p>
                <p>(Location: Kemptonpark)</p>
                <button className="Apply6">Apply</button>
              </div>
            </IonCardContent>
      </IonCard>







       </IonRow>
       </IonGrid>





        <IonHeader collapse="condense">
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Home;
