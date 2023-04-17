import { createRoot } from "react-dom/client";
import {Homepage,Portfolio, Header, Footer, Skills} from "./components"
import { BrowserRouter,Routes,Link,Route } from "react-router-dom";
const App=()=>{
    return(
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="" element={<Homepage />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/skills" element={<Skills />}/>

            </Routes>
        <Footer />
        </BrowserRouter>
    )
}
createRoot (document.getElementById("App")).render (<App />)