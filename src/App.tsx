import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import DefaultTemplate from "./template/default.template"
import ProductListPage from "./page/product/product-list.page"
import ProductDetailPage from "./page/product/product-detail.page"
import DashboardPage from "./page/product/dashboard.page"
import LoginPage from "./page/user/login.page"
import LoginTemplate from "./template/login.template"

// import { QueryClientProvider } from 'react-query'

// import { ReactQueryDevtools } from 'react-query/devtools'
// import { getClient } from './query-client'

const App = () => {
  // const queryClient = getClient()
  return (
    <>
      {/* <QueryClientProvider client={queryClient}> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard"></Navigate>}></Route>

          {/* default template */}
          <Route path="/dashboard" element={<DefaultTemplate></DefaultTemplate>}>
            <Route path="" element={<DashboardPage></DashboardPage>}></Route>
            <Route path="product-list" element={<ProductListPage></ProductListPage>}></Route>
            <Route path="product-detail/:id" element={<ProductDetailPage></ProductDetailPage>}></Route>
          </Route>

          {/* login template */}
          <Route path="/login" element={<LoginTemplate></LoginTemplate>}>
            <Route path="" element={<LoginPage></LoginPage>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider> */}
    </>
  )
}

export default App
