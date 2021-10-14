import { IonContent, IonPage, IonImg, IonLabel
} from '@ionic/react';
import './Login.css';


const ContactUs: React.FC = () => {
    return (
        <IonPage>
        <IonContent>
          <div className="contact-us">Contact Us</div>

          <div className="contacts">
            <br></br>On our email;
            
            <br></br> <IonImg src="../assets/email.png" className="contact-icons"/><IonLabel> umsebenziwethu@yahoo.com</IonLabel>
            <br></br>or on our <IonImg src="../assets/whatsapp.png" className="contact-icons"/><IonLabel>whatApp @0656718717</IonLabel>

            <br></br>
            <br></br> Be sure to engage with us on our social media platforms;
            <a href="https://www.facebook.com"><IonImg src="../assets/facebook.png" className="contact-icons"/></a><IonLabel>@Umsebenzi Wethu</IonLabel>
            <a href="https://www.instagram.com"><IonImg src="../assets/instagramm.png" className="contact-icons"/>
            </a><IonLabel>@UmsebenziW</IonLabel>
            <a href="https://twitter.com">  <IonImg src="../assets/twitter.png" className="contact-icons"/></a>
            <IonLabel>@UmsebenziW</IonLabel>
          </div>
        
        </IonContent>
  
      </IonPage>
    );
  };
  
  export default ContactUs;