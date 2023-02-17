import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/barSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      {/* left */}
      <div className="flex col-span-3 mx-3">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///90d3lxdHZtcHJqbW/AwcHk5eWVmJlnam1rbnCpq6yBhIb5+fnHyMng4eH29veKjI6ztLWipKV5fH6OkZLZ2tvq6+vLzMy5u7zIycnR0tLCw8OanJ7n5uYQAAACyUlEQVR4nO3di27iMBCFYcfOFodbEiBAgfd/ziXQSlvJNqkWCc3h/54gR3ac1p4xzgEAAAAAAAAAAAAAAAAoa4fVH2tWQzs13vK4qJtgT1MvjsspAfsYfGWTD7F/mG+/Da9+zv8StvtywKG2On7ffD2UAn7EVz/gE8SPfMCl7Rn6LeTXm5n1KXrnZ7mAa4U5Oopr7SHMD2KrMoTXQUz/eXPQWGdG4ZBMOFeZpNdpOk8m3Akl3CUTLoQSLt40YSeUsEsm3Agl3CQTnoW+Fudkwr3QFz/zT6LMUpNZaJw71a9+tCepT5mEKoOYHUKZNzH3Fo7OChFjeiH9crQfMR5LAZ37jLbfRR8/ywGv72JneEPR192D7dKbYReb4O0JTdwV90r/0Z76zcyaTX+afDQDAAAAAAAAAAAAYDL180P1M2D5c/yV+VqMVTmgfD2NfE2UROtasXlNvjbxIFNfmm6ZkRnC/CCKVJeOMhWm+rX6+v0W+j0zMgvNG3d26fcf6veQ6vcB6/dy6/fjv8GdCiqDmL8X4w3uNtH4J790P41zg/GttnGz7cGeqfw9UU7/ri93u68tmryvLU68r23UDquzNb+4cw8AAAAAAAAAAADAdKd5V726i+nXqm6evSD5p2UfGm/xnNv7JvQTDoFXwXKpQggP2p6cu1ivqImXcsCd5QG8C+nq2S8b+wGvEdOF+jcn61P0LubXVIsraIrPBTwqzNFRyDVZvvrBnigdcK3SnFdVdbpIWGaSZqfpRWWhuS416c8+nV2GvG1nl0gvwijTj9ALraXpYuihefWDPU2TqdcX+uKnA+o0IGbaD51rVQaxzta0i6w1mXXmRuKTWPhRMueWlf2IviruKLbG257GxqdHjSUX091r/tFm4mhYRJNb3uOmd1xM+0mr9Xzb1PY023mxt/Kn5f7Dmv3kvjUAAAAAAAAAAAAAUPUXCyx+ltjBidoAAAAASUVORK5CYII="
          alt="="
        />
        <img
          className="h-8 mx-2 ml-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/753px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="YT-logo"
        />
      </div>
      {/* Middle */}
      <div className="col-span-9 flex items-center">
        <input
          className="w-1/2 border border-gray-400 px-6 py-2 rounded-l-full outline-none"
          type="text"
          placeholder="Search here ....."
        />
        <button className="border border-gray-400 px-3 py-2 rounded-r-full bg-gray-100">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAAhFBMVEUAAAD+/v7t7e3////s7Oz29vbr6+v5+fn39/fw8PD09PRubm6MjIyAgICDg4Pb29t1dXXHx8czMzM5OTnOzs69vb2UlJSqqqqkpKS2trZpaWmYmJjl5eWwsLBWVlZjY2MPDw9NTU0cHBxAQEDU1NQhISEqKipISEhXV1ceHh4LCwsnJyf8GXGGAAARgklEQVR4nN1dbXfbLAwNYGxDXt0kbdKmbdpm3Z7t//+/x+D4JbaEwYYsGR92fOh84TogCSHQhOSFCZqXhOVPSZQ/CaYqVV2kK7l6lKqSqD9H+h2pKrn6c1HJbg2ITipuUar+awdJPfEIQsofI1m9U3fpVoDGcKO+uhQI6N/mxlQRURTFqXpK4vyR6kqqKhP1xFWl0JXqKSbqSaonqZ6Irrw5oGgiVEnyQrh6kkQ915VSPfGkqiRVpa5Lq3fIzQElE/07E3YxFdvzk1fyihYDJirlVaqeigET3RzQpB7DEh3DvB7D9WTQ76T1ZIhuDYj829wupmIEzekcCZvTaVTNaaoGun5KC3k1FCj21aNJqgrX5fIpbT0hlYn6WiQRh9Mm2+/32212WsY8ny75tHYCwiqHvFM81jogMkjc6luQ5kfNf6l8DJxeZ+/rSat8fkxnrxuR2gFhv45zjy6ARujuRIrNbvqjzeqifC22EWtMhnuwS9SHfX3/beRVlofZNuaC/hW7pFIPaakzzuqBVjqDV5WkaEg8fVjxKsvzXo20DlBLi12sA5x6BALRiVbmUpVUq3X9WFfqJ96sTOT+3YlYUebLXLxwFJ23Kl16hAFNov45HdcSVzD5eBzATJX1EyW46MYMxL4eGYCcdLfgp9VAYkV5yZu/SbuE8tOQwdhh97e4GSxTtnwezUyVHRGtLjETN7xHXW4M4KYFNCl8EOqJ6Er9VPgglOh59MIsLz/2uUrQXSpY6saVnUYFKSW9RY/USCq5gUCksTZNcCuAyv3RF7W8vEcXEiPG1qaGHoGiJ26tTW10NzmMn2iXZVc0GVh393NjbOuZWV5+LuUNcGNknNzHyhP/+76gw3cQapPJlNIr+IJKqZQ/naWSqtRPyWsgZnlZx7xqPNVL27pxvEdSVZ7lZPWOgIDM+o2xWThqecn4CP3WNQIg/YZZAYz5Udd4eUr/ks3FiNtKZkiZpTQcN8M6gHdcBQHKXIZbB6CrJRI/OHTx+PA2nc8eZ4v56v2nk2SdE7f1W4qu+TrrN2iVS/XS1raH6/kuW1L9JZnuSP5FD9nL+9Hy/ZWslstx/gSuuym27la/aP5Oe92tgFDdzYjVr/Y5z3IqSgBfqFw9oORp98uK3CK9ql3C2JdFp+abwppFuiRkQjIbSfuYNoSDf1+Q9gbqEVBMxX7j+G0vpODKw1NYAQgQS3d/erGe5Hko4UDFmNQSQ3M7V1b+ST0mtegpK8++oHoW6gnD+1X2dKk9O7w129tAWigl2599cJvEAshelqS4L4jterryvOTUSXRnfeokpr72A8y+ILY09+Njky+c3cwJxp7MmGtxFbuEJZ/GbuwLeEdzIonNS6UVv4YvyCxH3lPWskwjOxOX8sz4zV6lN1v57HE+73erx/PuMjOual7VW/U7591lclHJq8rzjrQqMq8SRoVwkLZAQvBWJdijztqUmibbn4O0cOHgS0qjkHobvTbt8wVJg+3/K2GoprRTuTIzjomwdonpy64YG721JJcGTa69jMG4MYm3PMupjQ/DEgdc1T3zcdwiivmC9ECem6iZPC/WLlMqcCtlK0b5Xtu+IP0tyHndIDZos4/M7J1ohLzweq1RV1ZqKa9Ef7m1Mk+tgXr8JS27hKOCZO64/QLot0rligM6516ZC5CL7haoA/md+dxaEqie+cwHVxC7hHJs0fZA/G4J4qrgySe3xjoA/9kiC6vbZmOmMt/lC9LS0RHIwhekDJWUYbNtr/6DrMP6itVSK9avAVRVyrqyfkdXokbrU+oGhPeo6QtKsFmwYqjNahc6UQmxSvARFiPRKX+EGxDeo6buZsgi5JOkFlaAq8pFJ8A+gF1CY6SxLEw4TzqFm/vwx62an9j0fg4UYkYPyLeMHYGwHtEJL0uC+FoPCQ9TCGKWPxJPDdSxoYgkWcjRIZ2k+iFaQPDX/E9SVyAkNrQcw2yB/GyWmnKAysX20TPh1y5h7D+wnZkMyI3Bfvm59Mktb+YEf8O4RAoS+g479n4ITzH0Z13P4LCfOWnp+pZ9kFrYBw2LpQVE5BFs9SQdgeAelTpAwsPjRPCV4ABfUBuIwXpn59UXhKw6vnjYUFwWgc1+MJ92iYCdkjsROMyYvYHtJj65SdiWPJhCqCMf3PZguxtPviDdJQ5OtzdeW92tCIamvCIAN+QoZQeIw+PFHajbI3pem6ZgE0+9K8EEm9O24QUcdHr9ks5AQI8K/YZotwMbfETI1oUjQd3zKYgrEKq7YSX6zcIff0K8hkviCoRzA43J1RW4UVgLZF646fkGe0pe+0f3UF9QDQS7RHfMGQjwBSmCJAGdFxvZ2QdrbHSB+2CFC6dVCW2oVZVw2MAscQbq9qjQb/AOx8HO83Kh36Je0d0OYwQXOs+JMxCg33QtaHF9CxcrYOj2C9z2V+LNLgHdvG/8KtwE1PYx9cFNzzrQ8lnJrufFKgDQxoXTADpCjedLOGegVo+iiY6qAdXbIwFibeoAHDA+xz5op6pMQHMvdgfqNK59QRL0OKmQhNLzouZ08f1IWXle5UZlsFVhvBV2XdSMqyoqUSBYCRzcgTo90robNny2zEVTDt5+4eDOwJI5A8F2iQR1THYdbvDy6uSFW/4sQZNrw0qFVXleOvGnTV9Q/hi340/zymooIUA93OyBAF+Qmo7gDv4GlSV4MHHiJgKsG7cB6vSo0AEgvA4aMEcFOOsACAhsPBPDzqxEHV8QOCa3V7FLCMbNl10CypL9lbiB823jjRvoJtzJAbZyyc3BxAWD0U/CHQi2lUHd/chdzjMVlWppQdOqsn3ICQJiYCTNwR2oc8JKr00FaE/O3FaCw3xB+dtgxGjiDgTHKwtwHfB8Hd0Nb58yX3YJ7DFfX4WbAF1s38z9I8HcKOwBTa7hC4Lnwy8v3ApfEMjt0D+6Ud+rtQsHttNXzBkI8L3qb5GAsupVDjsfn1aVFgft4aORu9QZqNujMzewgWpv1ot+g4EYA8VkJl2BUP3GwYHxxcPbJQyO2ImlKxBql0g4YuBwBW6gKPntMS5IwtumexF+HQBGPr0NPrve8QXJBHY2rVixMBpymQ/4TrcS3hybJc5A0PpN/86ItPrN4FWubQxG8zgBDIRE422FKxC47i7GMBLpkYXW3RwOxjvvRfuJC0KiuaahucFS8kt6igs6T8Uj2EoiC28ganXbeJzxEDMJD5eF9BOrpqPx0hQJet2R89+9XzKonwgc2L5JvFx7WMYFwSarCvtmrvsBViGdGgheA+hG3YB67jFEolC35Qo+hO6GXcp6L9prvDLSzkN5RV8Abtjpn40vbqV6QKKe1A9nFbHuGEOv3uHwlQS/1ef0EkOvFHhxGBTm9iP/CoZ7juvK+p7jxpGFywuTL4E4cnBlwRyBsB41zqwgR98eZShfEHL65ySGOZVMZ9eRyNfJUgTR3dhp9p/pECPAYJeoWkTZTN54EG7IHNCueu/c0OuqdsSdW38YFhw5mSs36giEc6vnGxdHhNwBHd2DfUEcu19hN/KMWNMXVP//FL3P4UFFDdgzsDkCi55cjCM3INuz6wy7VXjK/ca9shS7WuFRBsppgV/E8cJ92iUMPUWo7jEZzg2zuYorjODDHXnZS5/c0Os+XmS4ewzxmyazpD26o4HnAyR+Y89n3rlgOS1S/HqnTXppWWnbZ0AqCmSXVpctC5jTwnAwv/D1OvmCoGM0pqsR3/TOlCWQe04Lgl+oMNnz8XaJ6cYGHQwU8r6g5Ii3nUvL0TaX4cKex8Q3t/aS3HR7ykq0rW43b4Px/sAHGTynBezFPpe1Pn06MBVFYr7wd5kEz2lBKarkVHnidLAvyDDV9CGS8DktTLIyL78OcojuJmxjvMLqnY0OwrG5x5D3XBn3UgQROHGTsWmoTyY/kgDcABcOTXtui/7O9Aiw9wXJuO/ywKUVUKXFxuS06Lt98isrtq9s9oryr9h7h/2WDNgGG5bTgh6Ofb35flIv9d5jSAVfWtzRPGNOymRUTgv81ptGmZ+Kc6Go7lY27avdPcZz7moEDLBLzkjGC9Cq8rnYxlxdXtvtkvqy1CEjy/wq9xgWSMj2frd8zLZ6XBRGuR4r+aiPl9uF2/XMcy6Kiz2FgHvUtpW73BjADYxHwdy+UPn8WL3sXrdZtlyesu1u0U1QZUPutFmqstnUkYQXPfKY08L6l/NepuFzWtjNuRDlOXzeB3myS6cVgJy/M2LYVzJdOuijHNG/vEvvvqD26KaJ2QwcV/YUN59zcqFzWkiO3YA2ujwcGF8e0T8/s7A5LYi+Xhdvf0xZaVVmsH+mht3R8TktijEsYt+Zf1TZ6p1fKpa4uJpqBebf5moiUf/Jf34dyi6JJZ6yUQmUQDktGlZ334rOsbzK2qnEDZ6GnNyYdUDPaul8hpOTzCXDhbks1H571Y7Ri/LMQuS0aK9yBfeUBehtec45UKaiQC4GK8o0QE4LUFN6UAc/M96eQEZuOTkaxi5pb5slI9l9ZFx0umTmNnmWw+2SYkxGNhkkcnbRbnjqrelSX+pRDqXyUHMPNy1QKNKjATkt8Jmb/5sNMsO+H2MGigCzR1aTS7i/nBZ93vfDzjGZ03F+4pLCbnzkiqlmmfrLadGvKSVf7qyNlR+LDTFcPARfCtAmRwPZJeDxp/z100vvz3d83p3UUDB1Cbk47pKcHM/NyTJVfd48zd9go+lr+pLRfAqIfiALckpajs9poT5IfY1NTwaJpJi8h81+9zibT6fP09Xi8WW33xz0jCB2QMglipfk0vE5LYZ4XlQG9uLPWmrhGZExIG7hep6y4qoNz/lNw6cUtyMX0C4JyI3apPRd8atxi3xxK4SDzZyTLj3q5LQY7HkZn4rCTloOzmkxJoNENBYotRMoQ3NajIgy9ZCKwk6gGPY6Lns02C7xdy6/AZTYCJTEtke3xU1YCxRnX9CA6ODx9xi2gGzIceqe06KK2xuSQcIxpwUCJBOrOUdcc1qMO/0y4DwOCGQjUFaFRdx7Hme47r60AryFvMDn6Fvk9D7qndhcF0AW5FTgu8Me1cjIMG8hZrGVQMkXqw45LW6o2GREn5K0D6YbG3r5LewjMfEfwhnIUqBY57S4Dd1dAtmRo3dll1RAlnPOgpuPiPXIM5DNnONGoIm0MDRC5bQwAlmRS6QByIsvyO3Mii0Q79so0HPu9n1BIJC9QLkfu6QEojYCZSVDcIt8cUOB7OYcR4DK/beyS8MzSAzMadEDZEnOmNOinIquUQGjc1r0AVkKFENOi9vwBYFAduTuyi5pnFpz8zjfFTfDEc7GnJMQtxvzBYFAduSQnBbuqSi85bSwAYKvl27POSSnhXsqCkwthQEyxXzV5Ixn18lt2SUNIBvXXuFxvj9uwmbOKfPLIV75GjktLIHsyHXvMRyQisJbTgtLIG46nV3PuU5OiyGpKLzltLAFshQoSUQvclrcuO4ugWzWc/M6JPEu7JISiFrNOd7gFg1LReEtp4UDkLVAKX1BaLgvLgLw8ObQQL3Blopc6SAa4QsaogPGAlkJlPkd+IJAIJv13Jzdl11SAlkJlJkEuI02ca8B1EturQ9zFtyGpKLwltPCHaiP3DohdU4LL7cGjvMFuQD1CJR1TG96j6oHyERuHYs7tEuaJ7tQafkQi3u0uS6AEHJrWd2CMNYXND6nxWAgUKCsSTunxYBUFN5yWgwGguZcPiA7OS0M2oT4UkvegbrkcjFyl/4SAChZdH61+/QFgUAX5NZU0AG+oJtZB7SBGuTWhF8CRX3rN4lW+slpMRKo9jg/UI7ltGitcqsBEzinxWigUqDkc633HsO70d0lULGeeziI+9yj6gFaFDYkxA2d038vVs0RaP6dCAiozGkxPoPE3wNKRAICOcaG+s1p4QmIwjcr3rnuNgL929xqPXMbMfT+gOqcFqMzSDjntAgOdI++IFugf0B3Y0D/gl1iy+324rmGAzVjsQtnBoBE8ROQhTOjZb7fCBD5H9JOjRoma5X1AAAAAElFTkSuQmCC"
            className="w-6"
            alt=""
          />
        </button>
      </div>
      {/* right */}
      <div className="col-span-1">
        <img
          className="h-8 rounded-lg cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRD_OQ0FU9Bzh97svv-wUZmrfVTPIpG-UCFA&usqp=CAU"
          alt="profile"
        />
      </div>
    </div>
  );
};

export default Nav;
