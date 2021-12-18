import ButtonType1 from "./ButtonType1";
import Header from "./Header";
import Footer from "./Footer";

function Layout({greet, children, arr, func}){
    return (
      <>
         <Header/>
          <div>{children}</div>
          {greet}
          <ButtonType1 content={"Create Parent"}/>
         <Footer/>
      </>
    )
 }


 export default Layout;

