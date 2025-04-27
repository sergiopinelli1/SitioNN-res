document.addEventListener("DOMContentLoaded", function () {
    const modelButtons = document.querySelectorAll(".model-button2");
    const comparisonSection = document.querySelector(".seccion_comparativo2");
    const tables = {
      BIO60: `
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
              <td>1</td>
              <td>51.92</td>
              <td>39.6</td>
              <td>46.64</td>
            </tr>
            <tr>
              <td>5</td>
              <td>46.98</td>
              <td>37.54</td>
              <td>43.79</td>
            </tr>
            <tr>
              <td>10</td>
              <td>42.18</td>
              <td>31.68</td>
              <td>37.96</td>
            </tr>
            <tr>
            <td>20</td>
            <td>33.74</td>
            <td>26.47</td>
            <td>36.67</td>
            </tr>
            <tr>
            <td>30</td>
            <td>27.2</td>
            <td>21.59</td>
            <td>34.98</td>
            </tr>
            <tr>
            <td>40</td>
            <td>25.45</td>
            <td>19.2</td>
            <td>32.91</td>
            </tr>
            <tr>
            <td>50</td>
            <td>22.85</td>
            <td>15.62</td>
            <td>31.74</td>
            </tr>
            <tr>
            <td>60</td>
            <td>17.16</td>
            <td>12.69</td>
            <td>30.06</td>
            </tr>
            <tr>
            <td>70</td>
            <td>17.74</td>
            <td>11.93</td>
            <td>24.88</td>
            </tr>
            <tr>
            <td>80</td>
            <td>16</td>
            <td>11.5</td>
            <td>23.58</td>
            </tr>
            <tr>
            <td>90</td>
            <td>13.38</td>
            <td>9.76</td>
            <td>22.28</td>
            </tr>
            <tr>
            <td>100</td>
            <td>11.78</td>
            <td>7.27</td>
            <td>18.53</td>
            </tr>
            <tr>
            <td>125</td>
            <td>7.42</td>
            <td>6.73</td>
            <td>15.68</td>
            </tr>
            <tr>
            <td>150</td>
            <td>6.69</td>
            <td>5.1</td>
            <td>12.31</td>
            </tr>
        </tbody>
        </table>`,
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
              <td>1</td>
              <td>80.1</td>
              <td>70.5</td>
              <td>75.3</td>
            </tr>
            <tr>
              <td>5</td>
              <td>78.2</td>
              <td>68.8</td>
              <td>73.5</td>
            </tr>
            <tr>
              <td>10</td>
              <td>70.5</td>
              <td>65.2</td>
              <td>67.85</td>
            </tr>
                      <tr>
            <td>20</td>
            <td>33.74</td>
            <td>26.47</td>
            <td>36.67</td>
            </tr>
            <tr>
            <td>30</td>
            <td>27.2</td>
            <td>21.59</td>
            <td>34.98</td>
            </tr>
            <tr>
            <td>40</td>
            <td>25.45</td>
            <td>19.2</td>
            <td>32.91</td>
            </tr>
            <tr>
            <td>50</td>
            <td>22.85</td>
            <td>15.62</td>
            <td>31.74</td>
            </tr>
            <tr>
            <td>60</td>
            <td>17.16</td>
            <td>12.69</td>
            <td>30.06</td>
            </tr>
            <tr>
            <td>70</td>
            <td>17.74</td>
            <td>11.93</td>
            <td>24.88</td>
            </tr>
            <tr>
            <td>80</td>
            <td>16</td>
            <td>11.5</td>
            <td>23.58</td>
            </tr>
            <tr>
            <td>90</td>
            <td>13.38</td>
            <td>9.76</td>
            <td>22.28</td>
            </tr>
            <tr>
            <td>100</td>
            <td>11.78</td>
            <td>7.27</td>
            <td>18.53</td>
            </tr>
            <tr>
            <td>125</td>
            <td>7.42</td>
            <td>6.73</td>
            <td>15.68</td>
            </tr>
            <tr>
            <td>150</td>
            <td>6.69</td>
            <td>5.1</td>
            <td>12.31</td>
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
              <td>1</td>
              <td>120.3</td>
              <td>110.8</td>
              <td>115.55</td>
            </tr>
            <tr>
              <td>5</td>
              <td>115.5</td>
              <td>108.2</td>
              <td>111.85</td>
            </tr>
            <tr>
              <td>10</td>
              <td>100.5</td>
              <td>92.5</td>
              <td>96.5</td>
            </tr>
                      <tr>
            <td>20</td>
            <td>33.74</td>
            <td>26.47</td>
            <td>36.67</td>
            </tr>
            <tr>
            <td>30</td>
            <td>27.2</td>
            <td>21.59</td>
            <td>34.98</td>
            </tr>
            <tr>
            <td>40</td>
            <td>25.45</td>
            <td>19.2</td>
            <td>32.91</td>
            </tr>
            <tr>
            <td>50</td>
            <td>22.85</td>
            <td>15.62</td>
            <td>31.74</td>
            </tr>
            <tr>
            <td>60</td>
            <td>17.16</td>
            <td>12.69</td>
            <td>30.06</td>
            </tr>
            <tr>
            <td>70</td>
            <td>17.74</td>
            <td>11.93</td>
            <td>24.88</td>
            </tr>
            <tr>
            <td>80</td>
            <td>16</td>
            <td>11.5</td>
            <td>23.58</td>
            </tr>
            <tr>
            <td>90</td>
            <td>13.38</td>
            <td>9.76</td>
            <td>22.28</td>
            </tr>
            <tr>
            <td>100</td>
            <td>11.78</td>
            <td>7.27</td>
            <td>18.53</td>
            </tr>
            <tr>
            <td>125</td>
            <td>7.42</td>
            <td>6.73</td>
            <td>15.68</td>
            </tr>
            <tr>
            <td>150</td>
            <td>6.69</td>
            <td>5.1</td>
            <td>12.31</td>
            </tr>
        </tbody>
        </table>`
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
      updateTable("BIO60");
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
  