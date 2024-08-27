import { Card } from "./components/card"
// import { Footer } from "./components/footer"
// import { Header } from "./components/header"
import { DashboardLayout } from "./components/layot.dashboard"



function App() {
  return <>
    {/* <Header/>

    <Footer/> */}
    <DashboardLayout>
      <Card name="Raka Fajar" age={20} gender="male" />
      <Card name="Raka Fajar" age={20} gender="female" />
      <Card name="Raka Fajar" age={20} gender="male" />
      <Card name="Raka Fajar" age={20} gender="female" />
      <Card name="Raka Faja11r" age={20} gender="male" />
    </DashboardLayout>
  </>
}

export default App
