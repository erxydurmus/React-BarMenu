import { useEffect, useState } from "react"
import { supabase } from "./lib/supabase"
import MenuCard from "./components/MenuCard"
import "./index.css"

function App() {
  const [menuItems, setMenuItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMenu = async () => {
      const { data, error } = await supabase
        .from("menu_items")
        .select("*")

      if (error) {
        console.error(error)
      } else {
        setMenuItems(data)
      }

      setLoading(false)
    }

    fetchMenu()
  }, [])

  const categories = [...new Set(menuItems.map(item => item.category))]

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading menu...</p>
  }

  return (
    <>
      <header className="header">
        <h1>NO 46</h1>
      </header>

      <main className="menu">
        {categories.map(category => (
          <section key={category}>
            <h2 className="category-title">{category}</h2>

            <div className="menu-grid">
              {menuItems
                .filter(item => item.category === category)
                .map(item => (
                  <MenuCard
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                  />
                ))}
            </div>
          </section>
        ))}
      </main>
    </>
  )
}

export default App
