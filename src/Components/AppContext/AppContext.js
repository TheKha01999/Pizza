import { createContext, useState, useEffect } from "react";
import { lists } from "../API/API";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import AOS from "aos";
import { useNavigate } from "react-router-dom";
export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const [data, setData] = useState(() => lists);
  const [dataTradi, setDataTradi] = useState(lists.tradipizza);
  const [dataSea, setDataSea] = useState(() => lists.seafoodpizza);
  const [dataMixed, setDataMixed] = useState(() => lists.mixedpizza);
  const [cart, setCart] = useState([]);
  // console.log(data);
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const [isTes, setIsTes] = useState(true);
  const [isCurr, setIsCurr] = useState(false);
  const [img, setImg] = useState();
  const [curr, setCurr] = useState(() => {
    if (localStorage.getItem("current-pizza")) {
      let CurrentPizza = JSON.parse(localStorage.getItem("current-pizza"));
      setImg(CurrentPizza.img[0]);
      return CurrentPizza;
    }
  });
  const [check, setCheck] = useState(0);
  const [isLayout, setIsLayout] = useState(false);
  const [bill, setBill] = useState(0);

  const [eproduct, setEproduct] = useState(() => {
    if (localStorage.getItem("order-product")) {
      let emailproduct = JSON.parse(localStorage.getItem("order-product"));
      return emailproduct;
    } else {
      return [];
    }
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [mess, setMess] = useState("");
  const [address, setAddress] = useState("");
  const [find, setFind] = useState("");

  const navigate = useNavigate();

  // console.log(curr);
  const handle_search = () => {
    setSearch(!search);
    setFind("");
  };
  const handle_menu = () => {
    setMenu(!menu);
  };
  const handle_testomonials = () => {
    if (window.innerWidth < 752) {
      setIsTes(false);
    } else {
      setIsTes(true);
    }
  };
  /*677*/
  const NavFixed = () => {
    if (window.scrollY >= 300) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  };

  useEffect(() => {
    NavFixed();
    window.addEventListener("scroll", NavFixed);
    return () => window.removeEventListener("scroll", NavFixed);
  }, []);

  useEffect(() => {
    handle_testomonials();
    window.addEventListener("resize", handle_testomonials);
    return () => window.removeEventListener("resize", handle_testomonials);
  }, []);

  const handle_popup = (id) => {
    setIsCurr(!isCurr);
    if (id !== undefined) {
      const CurrPizza = data.AllProducts.find((pizza) => pizza.id === id);
      setCurr({ ...CurrPizza, qty: 1 });
      // setCart([...cart, { ...kq, qty: 1 }]);
    }
  };

  const handle_sort = (arr) => {
    if (check == 1) {
      return arr
        .slice()
        .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    } else if (check == 2) {
      return arr
        .slice()
        .sort((a, b) => (a.name > b.name ? -1 : b.name > a.name ? 1 : 0));
    } else if (check == 3) {
      return arr.slice().sort((a, b) => a.prices - b.prices);
    } else if (check == 4) {
      return arr.slice().sort((a, b) => b.prices - a.prices);
    } else {
      return arr;
    }
  };
  const handle_layout = () => {
    if (window.innerWidth < 576) {
      setIsLayout(false);
    }
  };
  useEffect(() => {
    handle_layout();
    window.addEventListener("resize", handle_layout);
    return () => window.removeEventListener("resize", handle_layout);
  }, []);

  const handle_addCart = (id) => {
    const kq = data.AllProducts.find((item) => {
      return item.id === id;
    });
    const index = cart.findIndex((item) => item.id === id);
    if (index >= 0) {
      const NewList = cart;
      NewList[index]["qty"]++;
      setCart(NewList);
      localStorage.setItem("cart-list", JSON.stringify(NewList));
    } else {
      setCart([...cart, { ...kq, qty: 1 }]);
      localStorage.setItem(
        "cart-list",
        JSON.stringify([...cart, { ...kq, qty: 1 }])
      );
    }
  };
  const handle_addCart2 = (id) => {
    const kq = data.AllProducts.find((item) => {
      return item.id === id;
    });
    const index = cart.findIndex((item) => item.id === id);
    if (index >= 0) {
      const NewList = cart;
      NewList[index]["qty"] = curr.qty + NewList[index]["qty"];
      setCart(NewList);
      localStorage.setItem("cart-list", JSON.stringify(NewList));
    } else {
      setCart([...cart, { ...kq, qty: curr.qty }]);
      localStorage.setItem(
        "cart-list",
        JSON.stringify([...cart, { ...kq, qty: curr.qty }])
      );
    }
  };
  const handle_product = (id) => {
    const CurrPizza = data.AllProducts.find((pizza) => pizza.id === id);
    // setCurr(CurrPizza);

    setCurr({ ...CurrPizza, qty: 1 });
    localStorage.setItem(
      "current-pizza",
      JSON.stringify({ ...CurrPizza, qty: 1 })
    );
  };

  const handle_hover = (image, index) => {
    setImg(image);
  };
  const scrolltotop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // useEffect(() => {
  //   setImg(curr.img[0]);
  // }, []);
  const changeQty = (id, num) => {
    const kq = cart.map((item) =>
      item.id === id && !(item.qty == 1 && num == -1)
        ? {
            ...item,
            qty: item["qty"] + num,
          }
        : item
    );

    setCart(kq);
    localStorage.setItem("cart-list", JSON.stringify(kq));
  };
  const changeQty2 = (id, num) => {
    setCurr(() => {
      if (curr.id === id && !(curr.qty == 1 && num == -1)) {
        return { ...curr, qty: curr["qty"] + num };
      } else {
        return curr;
      }
    });
  };

  const sum_bill = () => {
    const sum = cart.reduce((acc, valueCur) => {
      let kq = valueCur.prices * valueCur.qty;
      return acc + kq;
    }, 0);
    setBill(sum.toFixed(2));
  };
  useEffect(() => {
    sum_bill();
  }, [cart]);
  // console.log("curr_qty", curr.qty);
  // console.log("carrt", cart);

  const email_handle = () => {
    const emailproduct = cart.map((item) => {
      return item.name;
    });
    setEproduct(emailproduct);
    localStorage.setItem("order-product", JSON.stringify(emailproduct));
  };
  const delete_cart = (id) => {
    const kq = cart.filter((item) => item.id !== id);
    setCart(kq);
    localStorage.setItem("cart-list", JSON.stringify(kq));
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    swal({
      title: "Successfully!",
      text: "Your pizza will be deliveried very soon !!!",
      icon: "success",
      button: "Close!",
    });
    document
      .querySelector(".swal-button--confirm")
      .addEventListener("click", () => {
        navigate("/");
      });
    setEmail("");
    setName("");
    setPhone("");
    setCart([]);
    scrolltotop();
    setMess("");
    setAddress("");
    setEproduct([]);
    localStorage.setItem("cart-list", JSON.stringify([]));
    emailjs
      .sendForm(
        "service_jjrwae5",
        "template_qcfeboo",
        form.current,
        "6aDtqbkbbmeXpk4T4"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  useEffect(() => {
    AOS.init({ duration: 1500 });
    // AOS.init();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("cart-list")) {
      setCart(JSON.parse(localStorage.getItem("cart-list")));
    }
  }, []);
  return (
    <AppContext.Provider
      value={{
        search,
        setSearch,
        handle_search,
        menu,
        handle_menu,
        isTes,
        handle_testomonials,
        data,
        setData,
        handle_popup,
        curr,
        isCurr,
        setCurr,
        handle_sort,
        dataTradi,
        dataSea,
        dataMixed,
        setDataTradi,
        setCheck,
        setIsLayout,
        isLayout,
        handle_addCart,
        cart,
        setCart,
        handle_product,
        setImg,
        img,
        handle_hover,
        scrolltotop,
        setMenu,
        changeQty,
        delete_cart,
        handle_addCart2,
        changeQty2,
        bill,
        sum_bill,
        email_handle,
        eproduct,
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        sendEmail,
        form,
        find,
        setFind,
        mess,
        setMess,
        address,
        setAddress,
        navigate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
