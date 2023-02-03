import HTop from './partials/headerTop/HTop'
import SideBar from './components/sidebar/sideBar'
import Container from './partials/mainContainer/container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useMemo } from 'react'
import MenuCTX from './context/menuCtx'
import BtnShowHide from './components/sidebar/extra/BtnShowHide'
import './App.css'

// pages and components
import Home from './pages/home/Home'
import Profile from './components/main/profile/profile.'
import Layanan from './pages/layanan/layanan'
import Layanan1 from './components/main/layanan/layanan1'

import CardKadis from './components/main/home/cardKadis'
import Alamat from './components/footer/alamat/alamat'

function App() {
  const [menuShow, setMenuShow] = useState(true);
  const menuMemo = useMemo(()=>({
    menuShow, setMenuShow
  }), [menuShow]);
  return (
    <MenuCTX.Provider value={menuMemo}>
      <div className="overflow-x-hidden">
        <header>
          <HTop />
        </header>
        <BrowserRouter>
          <main className="flex w-full">
            <div className="relative absolute flex left-0 w-max">
              <BtnShowHide />
              <Container>
                <SideBar />
              </Container>
            </div>
            <div className="main-scroll w-full h-full max-h-[100vh] flex flex-col sm:flex-row p-3 overflow-y-auto">
              <div className="w-full sm:w-[40%] h-full flex flex-col">
                <CardKadis />
              </div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/layanan" element={<Layanan />}>
                  <Route path="1" element={<Layanan1 />} />
                  <Route path="2" element={<h1>Layanan 2</h1>} />
                  <Route path="3" element={<h1>Layanan 3</h1>} />
                  <Route path="4" element={<h1>Layanan 4</h1>} />
                </Route>
                <Route path="/pengaduan" element={
                  <Container>
                    <h1>PENGADUAN</h1>
                  </Container>
                } />
                <Route path="/survey" element={
                  <Container>
                    <h1>SURVEY</h1>
                  </Container>
                } />
                <Route path="/gallery" element={
                  <Container>
                    <h1>GALERRY</h1>
                  </Container>
                } />
              </Routes>
            </div>
          </main>
          <footer className="flex flex-col bg-slate-900 dark:bg-slate-500 w-full min-h-[30vh]">
            <div className="flex w-2/4 h-full p-5">
              <Alamat />
            </div>
          </footer>
        </BrowserRouter>
      </div>
    </MenuCTX.Provider>
  )
}

export default App
