document.addEventListener("DOMContentLoaded", function () {
    const modelButtons = document.querySelectorAll(".model-button2");
    const comparisonSection = document.querySelector(".seccion_comparativo2");
    const tables = {
      // BIO60: `
      //   <table class="tabla_comparativa2">
      //     <thead>
      //       <tr>
      //         <th>Distancia (cm)</th>
      //         <th>Espectro Rojo</th>
      //         <th>Espectro NIR</th>
      //         <th>Total</th>
      //       </tr>
      //     </thead>
      //     <tbody>
      //       <tr>
      //           <td class="atributo2 titulo2">1</td>
      //           <td>71</td>
      //           <td>88</td>
      //           <td>98</td>
      //       </tr>
      //       <tr>
      //           <td class="atributo2 titulo2">5</td>
      //           <td>67</td>
      //           <td>81</td>
      //           <td>90</td>
      //       </tr>
      //       <tr>
      //           <td class="atributo2 titulo2">10</td>
      //           <td>64</td>
      //           <td>77</td>
      //           <td>82</td>
      //       </tr>
      //       <tr>
      //           <td class="atributo2 titulo2">20</td>
      //           <td>45</td>
      //           <td>70</td>
      //           <td>79</td>
      //       </tr>
      //       <tr>
      //           <td class="atributo2 titulo2">30</td>
      //           <td>32</td>
      //           <td>64</td>
      //           <td>76</td>
      //       </tr>
      //       <tr>
      //           <td class="atributo2 titulo2">40</td>
      //           <td>28</td>
      //           <td>57</td>
      //           <td>71</td>
      //       </tr>
      //       <tr>
      //           <td class="atributo2 titulo2">50</td>
      //           <td>25</td>
      //           <td>49</td>
      //           <td>65</td>
      //       </tr>
      //       <tr>
      //           <td class="atributo2 titulo2">60</td>
      //           <td>20</td>
      //           <td>45</td>
      //           <td>59</td>
      //       </tr>
      //       <tr>
      //           <td class="atributo2 titulo2">70</td>
      //           <td>18</td>
      //           <td>39</td>
      //           <td>56</td>
      //       </tr>
      //       <tr>
      //           <td class="atributo2 titulo2">80</td>
      //           <td>17</td>
      //           <td>34</td>
      //           <td>49</td>
      //       </tr>
      //       <tr>
      //           <td class="atributo2 titulo2">90</td>
      //           <td>16</td>
      //           <td>29</td>
      //           <td>44</td>
      //       </tr>
      //       <tr>
      //           <td class="atributo2 titulo2">100</td>
      //           <td>15</td>
      //           <td>26</td>
      //           <td>41</td>
      //       </tr>
      //       <tr>
      //           <td class="atributo2 titulo2">110</td>
      //           <td>13</td>
      //           <td>23</td>
      //           <td>35</td>
      //       </tr>
      //       <tr>             
      //         <td>125</td>
      //         <td>7.42</td>
      //         <td>6.73</td>
      //         <td>15.68</td>
      //       </tr>
      //       <tr>
      //         <td>150</td>
      //         <td>6.69</td>
      //         <td>5.1</td>
      //         <td>12.31</td>
      //       </tr>
      //   </tbody>
      //   </table>`,
      BIO300: `
                <table class="tabla_comparativa2">
          <thead>
            <tr>
              <th>Distancia (cm)</th>
              <th>Espectro Rojo</th>
              <th>Espectro NIR</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td class="atributo2 titulo2">1</td>
                <td>71</td>
                <td>88</td>
                <td>98</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">5</td>
                <td>67</td>
                <td>81</td>
                <td>90</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">10</td>
                <td>64</td>
                <td>77</td>
                <td>82</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">20</td>
                <td>45</td>
                <td>70</td>
                <td>79</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">30</td>
                <td>32</td>
                <td>64</td>
                <td>76</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">40</td>
                <td>28</td>
                <td>57</td>
                <td>71</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">50</td>
                <td>25</td>
                <td>49</td>
                <td>65</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">60</td>
                <td>20</td>
                <td>45</td>
                <td>59</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">70</td>
                <td>18</td>
                <td>39</td>
                <td>56</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">80</td>
                <td>17</td>
                <td>34</td>
                <td>49</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">90</td>
                <td>16</td>
                <td>29</td>
                <td>44</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">100</td>
                <td>15</td>
                <td>26</td>
                <td>41</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">110</td>
                <td>13</td>
                <td>23</td>
                <td>35</td>
            </tr>
        </tbody>
        </table>`,
      BIO600: `
                <table class="tabla_comparativa2">
          <thead>
            <tr>
              <th>Distancia (cm)</th>
              <th>Espectro Rojo</th>
              <th>Espectro NIR</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td class="atributo2 titulo2">1</td>
                <td>80</td>
                <td>99</td>
                <td>110</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">5</td>
                <td>74</td>
                <td>88</td>
                <td>98</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">10</td>
                <td>70</td>
                <td>82</td>
                <td>91</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">20</td>
                <td>51</td>
                <td>78</td>
                <td>87</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">30</td>
                <td>41</td>
                <td>69</td>
                <td>79</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">40</td>
                <td>38</td>
                <td>65</td>
                <td>81</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">50</td>
                <td>31</td>
                <td>56</td>
                <td>75</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">60</td>
                <td>28</td>
                <td>55</td>
                <td>64</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">70</td>
                <td>24</td>
                <td>48</td>
                <td>62</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">80</td>
                <td>23</td>
                <td>43</td>
                <td>57</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">90</td>
                <td>20</td>
                <td>40</td>
                <td>54</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">100</td>
                <td>18</td>
                <td>36</td>
                <td>48</td>
            </tr>
            <tr>
                <td class="atributo2 titulo2">110</td>
                <td>16</td>
                <td>27</td>
                <td>44</td>
            </tr>
        </tbody>
        </table>`,
    };
  
    // Función para actualizar la tabla
    function updateTable(model) {
      comparisonSection.innerHTML = tables[model];
    }
  
    // Configuración inicial: seleccionar BIO60 por defecto
    modelButtons.forEach((button) => button.classList.remove("selected"));
    const defaultButton = document.querySelector(`.model-button2[data-model="BIO300"]`);
    if (defaultButton) {
      defaultButton.classList.add("selected");
      updateTable("BIO300");
    }
  
    // Agregar evento de clic a los botones
    modelButtons.forEach((button) => {
      button.addEventListener("click", function () {
        modelButtons.forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
        const model = button.getAttribute("data-model");
        updateTable(model);
      });
    });
  });
  