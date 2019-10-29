var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

var subFiltro = document.getElementById("container");
var btnsSubFiltro = subFiltro.getElementsByClassName("filterDiv");
for (var i = 0; i < btnsSubFiltro.length; i++) {
  btnsSubFiltro[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("seleccionado");
    current[0].className = current[0].className.replace(" seleccionado", "");
    this.className += " seleccionado";
  });
}

/* PRIMER FILTRO */

function primerFiltro(a) {
  var x = document.getElementsByClassName("CelularesTabletas");
  var c = document.getElementsByClassName("computadores");
  var d = document.getElementsByClassName("desarrollo");
  var inf = document.getElementsByClassName("infraestructura");
  var m = document.getElementsByClassName("multifuncionales");
  var s = document.getElementsByClassName("seguridad");
  var v = document.getElementsByClassName("videoProyeccion");




  if (a == "Todo") {
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.remove("show");
      c[i].classList.remove("show");
      d[i].classList.remove("show");
      inf[i].classList.remove("show");
      m[i].classList.remove("show");
      s[i].classList.remove("show");
      v[i].classList.remove("show");


    }

    document.getElementById("lineamientosComputadores").style.display = "block";
    document.getElementById("lineamientosCelulares").style.display = "block";
    document.getElementById("lineamientosDesarrollo").style.display = "block";
    document.getElementById("lineamientosInfraestructura").style.display = "block";
    document.getElementById("lineamientosMultifuncionales").style.display = "block";
    document.getElementById("lineamientosSeguridad").style.display = "block";

    /* Celulares */
    document.getElementById("administradoresCel").style.display = "block";
    document.getElementById("hardwareCel").style.display = "block";
    document.getElementById("servicioCel").style.display = "block";
    document.getElementById("SistemasOperativosCel").style.display = "block";
    /* Computadores */
    document.getElementById("hardwareCom").style.display = "block";
    document.getElementById("navegadoresCom").style.display = "block";
    document.getElementById("seguridadCom").style.display = "block";
    document.getElementById("sistemasOperativosCom").style.display = "block";
    document.getElementById("suitOfimaticaCom").style.display = "block";
    /* Desarrollo */
    document.getElementById("webDesarrollo").style.display = "block";
    document.getElementById("capaMediaDesarrollo").style.display = "block";
    document.getElementById("proceDatosDesarrollo").style.display = "block";
    document.getElementById("visualizacionDesarrollo").style.display = "block";
    document.getElementById("flujoProcesosDesarrollo").style.display = "block";
    document.getElementById("webApiDesarrollo").style.display = "block";
    document.getElementById("liberacionDesarrollo").style.display = "block";
    document.getElementById("integracionesDesarrollo").style.display = "block";
    document.getElementById("movilidadDesarrollo").style.display = "block";
    document.getElementById("automatizacionesDesarrollo").style.display = "block";
    document.getElementById("analiticaDesarrollo").style.display = "block";
    document.getElementById("cognitivaDesarrollo").style.display = "block";
    /* Infraestructura */
    document.getElementById("solucionesInfra").style.display = "block";
    document.getElementById("BaseDatosInfraestructura").style.display = "block";
    document.getElementById("sistemasOpInfraestructura").style.display = "block";
    document.getElementById("virtualizacionInfra").style.display = "block";
    document.getElementById("redInalambricaInfra").style.display = "block";
    /* Multifuncionales */
    document.getElementById("hardwareMultifuncionales").style.display = "block";
    document.getElementById("soporteMultifuncionales").style.display = "block";
    /* Seguridad */
    document.getElementById("accesosSeguridad").style.display = "block";
    document.getElementById("actualizacionesSeguridad").style.display = "block";
    document.getElementById("basesDatosSeguridad").style.display = "block";
    document.getElementById("conexionesSeguridad").style.display = "block";
    document.getElementById("correoSeguridad").style.display = "block";
    document.getElementById("datosPersonalesSeguridad").style.display = "block";
    document.getElementById("dispositivosSeguridad").style.display = "block";
    document.getElementById("drpSeguridad").style.display = "block";
    document.getElementById("eolSeguridad").style.display = "block";
    document.getElementById("perimetralSeguridad").style.display = "block";
    document.getElementById("soporteRemotoSeguridad").style.display = "block";
    document.getElementById("transaccionalesSeguridad").style.display = "block";
    document.getElementById("versionamientoSeguridad").style.display = "block";
    document.getElementById("webSeguridad").style.display = "block";
    /* Video Proyeccion */
    document.getElementById("hardwareVideoProyeccion").style.display = "block";

  }

  if (a == "CelularesTabletas") {
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].classList.toggle("show");
      c[i].classList.remove("show");
      d[i].classList.remove("show");
      inf[i].classList.remove("show");
      m[i].classList.remove("show");
      s[i].classList.remove("show");
      v[i].classList.remove("show");

    }
    document.getElementById("lineamientosComputadores").style.display = "none";
    document.getElementById("lineamientosDesarrollo").style.display = "none";
    document.getElementById("lineamientosInfraestructura").style.display = "none";
    document.getElementById("lineamientosMultifuncionales").style.display = "none";
    document.getElementById("lineamientosSeguridad").style.display = "none";
    document.getElementById("lineamientosVideoProyeccion").style.display = "none";
    document.getElementById("lineamientosCelulares").style.display = "block";
  }

  if (a == "Computadores") {
    var i;
    for (i = 0; i < c.length; i++) {
      c[i].classList.toggle("show");
      x[i].classList.remove("show");
      d[i].classList.remove("show");
      inf[i].classList.remove("show");
      m[i].classList.remove("show");
      s[i].classList.remove("show");
      v[i].classList.remove("show");

    }
    document.getElementById("lineamientosCelulares").style.display = "none";
    document.getElementById("lineamientosDesarrollo").style.display = "none";
    document.getElementById("lineamientosInfraestructura").style.display = "none";
    document.getElementById("lineamientosMultifuncionales").style.display = "none";
    document.getElementById("lineamientosSeguridad").style.display = "none";
    document.getElementById("lineamientosVideoProyeccion").style.display = "none";
    document.getElementById("lineamientosComputadores").style.display = "block";
  }

  if (a == "Desarrollo") {
    var i;
    for (i = 0; i < c.length; i++) {
      d[i].classList.toggle("show");
      x[i].classList.remove("show");
      c[i].classList.remove("show");
      inf[i].classList.remove("show");
      m[i].classList.remove("show");
      s[i].classList.remove("show");
      v[i].classList.remove("show");


    }
    document.getElementById("lineamientosCelulares").style.display = "none";
    document.getElementById("lineamientosComputadores").style.display = "none";
    document.getElementById("lineamientosInfraestructura").style.display = "none";
    document.getElementById("lineamientosMultifuncionales").style.display = "none";
    document.getElementById("lineamientosSeguridad").style.display = "none";
    document.getElementById("lineamientosVideoProyeccion").style.display = "none";
    document.getElementById("lineamientosDesarrollo").style.display = "block";
  }

  if (a == "Infraestructura") {
    var i;
    for (i = 0; i < c.length; i++) {
      inf[i].classList.toggle("show");
      d[i].classList.remove("show");
      x[i].classList.remove("show");
      c[i].classList.remove("show");
      m[i].classList.remove("show");
      s[i].classList.remove("show");
      v[i].classList.remove("show");


    }
    document.getElementById("lineamientosCelulares").style.display = "none";
    document.getElementById("lineamientosComputadores").style.display = "none";
    document.getElementById("lineamientosDesarrollo").style.display = "none";
    document.getElementById("lineamientosMultifuncionales").style.display = "none";
    document.getElementById("lineamientosSeguridad").style.display = "none";
    document.getElementById("lineamientosVideoProyeccion").style.display = "none";
    document.getElementById("lineamientosInfraestructura").style.display = "block";

  }

  if (a == "Multifuncionales") {
    var i;
    for (i = 0; i < c.length; i++) {
      m[i].classList.toggle("show");
      inf[i].classList.remove("show");
      d[i].classList.remove("show");
      x[i].classList.remove("show");
      c[i].classList.remove("show");
      s[i].classList.remove("show");
      v[i].classList.remove("show");

    }
    document.getElementById("lineamientosCelulares").style.display = "none";
    document.getElementById("lineamientosComputadores").style.display = "none";
    document.getElementById("lineamientosDesarrollo").style.display = "none";
    document.getElementById("lineamientosInfraestructura").style.display = "none";
    document.getElementById("lineamientosSeguridad").style.display = "none";
    document.getElementById("lineamientosVideoProyeccion").style.display = "none";
    document.getElementById("lineamientosMultifuncionales").style.display = "block";

  }

  if (a == "Seguridad") {
    var i;
    for (i = 0; i < c.length; i++) {
      s[i].classList.toggle("show");
      m[i].classList.remove("show");
      inf[i].classList.remove("show");
      d[i].classList.remove("show");
      x[i].classList.remove("show");
      c[i].classList.remove("show");
      v[i].classList.remove("show");
    }
    document.getElementById("lineamientosCelulares").style.display = "none";
    document.getElementById("lineamientosComputadores").style.display = "none";
    document.getElementById("lineamientosDesarrollo").style.display = "none";
    document.getElementById("lineamientosInfraestructura").style.display = "none";
    document.getElementById("lineamientosMultifuncionales").style.display = "none";
    document.getElementById("lineamientosVideoProyeccion").style.display = "none";
    document.getElementById("lineamientosSeguridad").style.display = "block";
  }

  if (a == "VideoProyeccion") {
    var i;
    for (i = 0; i < c.length; i++) {
      v[i].classList.toggle("show");
      s[i].classList.remove("show");
      m[i].classList.remove("show");
      inf[i].classList.remove("show");
      d[i].classList.remove("show");
      x[i].classList.remove("show");
      c[i].classList.remove("show");
    }
    document.getElementById("lineamientosCelulares").style.display = "none";
    document.getElementById("lineamientosComputadores").style.display = "none";
    document.getElementById("lineamientosDesarrollo").style.display = "none";
    document.getElementById("lineamientosInfraestructura").style.display = "none";
    document.getElementById("lineamientosMultifuncionales").style.display = "none";
    document.getElementById("lineamientosSeguridad").style.display = "none";
    document.getElementById("lineamientosVideoProyeccion").style.display = "block";
  }

}

function segundoFiltro(b) {

  /* Filtro Celulares */

  if (b == "adminCel") {
    document.getElementById("administradoresCel").style.display = "block";
    document.getElementById("hardwareCel").style.display = "none";
    document.getElementById("servicioCel").style.display = "none";
    document.getElementById("SistemasOperativosCel").style.display = "none";
  }

  if (b == "hardwareCel") {
    document.getElementById("administradoresCel").style.display = "none";
    document.getElementById("hardwareCel").style.display = "block";
    document.getElementById("servicioCel").style.display = "none";
    document.getElementById("SistemasOperativosCel").style.display = "none";
  }

  if (b == "servicioCel") {
    document.getElementById("administradoresCel").style.display = "none";
    document.getElementById("hardwareCel").style.display = "none";
    document.getElementById("servicioCel").style.display = "block";
    document.getElementById("SistemasOperativosCel").style.display = "none";
  }

  if (b == "SistemasOperativosCel") {
    document.getElementById("administradoresCel").style.display = "none";
    document.getElementById("hardwareCel").style.display = "none";
    document.getElementById("servicioCel").style.display = "none";
    document.getElementById("SistemasOperativosCel").style.display = "block";
  }


  /* Filtro Computadores */

  if (b == "hardwareCom") {
    document.getElementById("hardwareCom").style.display = "block";
    document.getElementById("navegadoresCom").style.display = "none";
    document.getElementById("seguridadCom").style.display = "none";
    document.getElementById("sistemasOperativosCom").style.display = "none";
    document.getElementById("suitOfimaticaCom").style.display = "none";
  }

  if (b == "navegadoresCom") {
    document.getElementById("hardwareCom").style.display = "none";
    document.getElementById("navegadoresCom").style.display = "block";
    document.getElementById("seguridadCom").style.display = "none";
    document.getElementById("sistemasOperativosCom").style.display = "none";
    document.getElementById("suitOfimaticaCom").style.display = "none";
  }

  if (b == "seguridadCom") {
    document.getElementById("hardwareCom").style.display = "none";
    document.getElementById("navegadoresCom").style.display = "none";
    document.getElementById("seguridadCom").style.display = "block";
    document.getElementById("sistemasOperativosCom").style.display = "none";
    document.getElementById("suitOfimaticaCom").style.display = "none";
  }

  if (b == "sistemasOperativosCom") {
    document.getElementById("hardwareCom").style.display = "none";
    document.getElementById("navegadoresCom").style.display = "none";
    document.getElementById("seguridadCom").style.display = "none";
    document.getElementById("sistemasOperativosCom").style.display = "block";
    document.getElementById("suitOfimaticaCom").style.display = "none";
  }

  if (b == "suitOfimaticaCom") {
    document.getElementById("hardwareCom").style.display = "none";
    document.getElementById("navegadoresCom").style.display = "none";
    document.getElementById("seguridadCom").style.display = "none";
    document.getElementById("sistemasOperativosCom").style.display = "none";
    document.getElementById("suitOfimaticaCom").style.display = "block";
  }

  /* Filtro Desarrollo */

  if (b == "web") {
    document.getElementById("webDesarrollo").style.display = "block";
    document.getElementById("capaMediaDesarrollo").style.display = "none";
    document.getElementById("proceDatosDesarrollo").style.display = "none";
    document.getElementById("visualizacionDesarrollo").style.display = "none";
    document.getElementById("flujoProcesosDesarrollo").style.display = "none";
    document.getElementById("webApiDesarrollo").style.display = "none";
    document.getElementById("liberacionDesarrollo").style.display = "none";
    document.getElementById("integracionesDesarrollo").style.display = "none";
    document.getElementById("movilidadDesarrollo").style.display = "none";
    document.getElementById("automatizacionesDesarrollo").style.display = "none";
    document.getElementById("analiticaDesarrollo").style.display = "none";
    document.getElementById("cognitivaDesarrollo").style.display = "none";
  }

  if (b == "capaMedia") {
    document.getElementById("webDesarrollo").style.display = "none";
    document.getElementById("capaMediaDesarrollo").style.display = "block";
    document.getElementById("proceDatosDesarrollo").style.display = "none";
    document.getElementById("visualizacionDesarrollo").style.display = "none";
    document.getElementById("flujoProcesosDesarrollo").style.display = "none";
    document.getElementById("webApiDesarrollo").style.display = "none";
    document.getElementById("liberacionDesarrollo").style.display = "none";
    document.getElementById("integracionesDesarrollo").style.display = "none";
    document.getElementById("movilidadDesarrollo").style.display = "none";
    document.getElementById("automatizacionesDesarrollo").style.display = "none";
    document.getElementById("analiticaDesarrollo").style.display = "none";
    document.getElementById("cognitivaDesarrollo").style.display = "none";
  }

  if (b == "proceDatos") {
    document.getElementById("webDesarrollo").style.display = "none";
    document.getElementById("capaMediaDesarrollo").style.display = "none";
    document.getElementById("proceDatosDesarrollo").style.display = "block";
    document.getElementById("visualizacionDesarrollo").style.display = "none";
    document.getElementById("flujoProcesosDesarrollo").style.display = "none";
    document.getElementById("webApiDesarrollo").style.display = "none";
    document.getElementById("liberacionDesarrollo").style.display = "none";
    document.getElementById("integracionesDesarrollo").style.display = "none";
    document.getElementById("movilidadDesarrollo").style.display = "none";
    document.getElementById("automatizacionesDesarrollo").style.display = "none";
    document.getElementById("analiticaDesarrollo").style.display = "none";
    document.getElementById("cognitivaDesarrollo").style.display = "none";
  }

  if (b == "visualizacion") {
    document.getElementById("webDesarrollo").style.display = "none";
    document.getElementById("capaMediaDesarrollo").style.display = "none";
    document.getElementById("proceDatosDesarrollo").style.display = "none";
    document.getElementById("visualizacionDesarrollo").style.display = "block";
    document.getElementById("flujoProcesosDesarrollo").style.display = "none";
    document.getElementById("webApiDesarrollo").style.display = "none";
    document.getElementById("liberacionDesarrollo").style.display = "none";
    document.getElementById("integracionesDesarrollo").style.display = "none";
    document.getElementById("movilidadDesarrollo").style.display = "none";
    document.getElementById("automatizacionesDesarrollo").style.display = "none";
    document.getElementById("analiticaDesarrollo").style.display = "none";
    document.getElementById("cognitivaDesarrollo").style.display = "none";
  }

  if (b == "flujoProcesos") {
    document.getElementById("webDesarrollo").style.display = "none";
    document.getElementById("capaMediaDesarrollo").style.display = "none";
    document.getElementById("proceDatosDesarrollo").style.display = "none";
    document.getElementById("visualizacionDesarrollo").style.display = "none";
    document.getElementById("flujoProcesosDesarrollo").style.display = "block";
    document.getElementById("webApiDesarrollo").style.display = "none";
    document.getElementById("liberacionDesarrollo").style.display = "none";
    document.getElementById("integracionesDesarrollo").style.display = "none";
    document.getElementById("movilidadDesarrollo").style.display = "none";
    document.getElementById("automatizacionesDesarrollo").style.display = "none";
    document.getElementById("analiticaDesarrollo").style.display = "none";
    document.getElementById("cognitivaDesarrollo").style.display = "none";
  }

  if (b == "webApi") {
    document.getElementById("webDesarrollo").style.display = "none";
    document.getElementById("capaMediaDesarrollo").style.display = "none";
    document.getElementById("proceDatosDesarrollo").style.display = "none";
    document.getElementById("visualizacionDesarrollo").style.display = "none";
    document.getElementById("flujoProcesosDesarrollo").style.display = "none";
    document.getElementById("webApiDesarrollo").style.display = "block";
    document.getElementById("liberacionDesarrollo").style.display = "none";
    document.getElementById("integracionesDesarrollo").style.display = "none";
    document.getElementById("movilidadDesarrollo").style.display = "none";
    document.getElementById("automatizacionesDesarrollo").style.display = "none";
    document.getElementById("analiticaDesarrollo").style.display = "none";
    document.getElementById("cognitivaDesarrollo").style.display = "none";
  }

  if (b == "liberacion") {
    document.getElementById("webDesarrollo").style.display = "none";
    document.getElementById("capaMediaDesarrollo").style.display = "none";
    document.getElementById("proceDatosDesarrollo").style.display = "none";
    document.getElementById("visualizacionDesarrollo").style.display = "none";
    document.getElementById("flujoProcesosDesarrollo").style.display = "none";
    document.getElementById("webApiDesarrollo").style.display = "none";
    document.getElementById("liberacionDesarrollo").style.display = "block";
    document.getElementById("integracionesDesarrollo").style.display = "none";
    document.getElementById("movilidadDesarrollo").style.display = "none";
    document.getElementById("automatizacionesDesarrollo").style.display = "none";
    document.getElementById("analiticaDesarrollo").style.display = "none";
    document.getElementById("cognitivaDesarrollo").style.display = "none";
  }

  if (b == "integraciones") {
    document.getElementById("webDesarrollo").style.display = "none";
    document.getElementById("capaMediaDesarrollo").style.display = "none";
    document.getElementById("proceDatosDesarrollo").style.display = "none";
    document.getElementById("visualizacionDesarrollo").style.display = "none";
    document.getElementById("flujoProcesosDesarrollo").style.display = "none";
    document.getElementById("webApiDesarrollo").style.display = "none";
    document.getElementById("liberacionDesarrollo").style.display = "none";
    document.getElementById("integracionesDesarrollo").style.display = "block";
    document.getElementById("movilidadDesarrollo").style.display = "none";
    document.getElementById("automatizacionesDesarrollo").style.display = "none";
    document.getElementById("analiticaDesarrollo").style.display = "none";
    document.getElementById("cognitivaDesarrollo").style.display = "none";
  }

  if (b == "movilidad") {
    document.getElementById("webDesarrollo").style.display = "none";
    document.getElementById("capaMediaDesarrollo").style.display = "none";
    document.getElementById("proceDatosDesarrollo").style.display = "none";
    document.getElementById("visualizacionDesarrollo").style.display = "none";
    document.getElementById("flujoProcesosDesarrollo").style.display = "none";
    document.getElementById("webApiDesarrollo").style.display = "none";
    document.getElementById("liberacionDesarrollo").style.display = "none";
    document.getElementById("integracionesDesarrollo").style.display = "none";
    document.getElementById("movilidadDesarrollo").style.display = "block";
    document.getElementById("automatizacionesDesarrollo").style.display = "none";
    document.getElementById("analiticaDesarrollo").style.display = "none";
    document.getElementById("cognitivaDesarrollo").style.display = "none";
  }

  if (b == "automatizaciones") {
    document.getElementById("webDesarrollo").style.display = "none";
    document.getElementById("capaMediaDesarrollo").style.display = "none";
    document.getElementById("proceDatosDesarrollo").style.display = "none";
    document.getElementById("visualizacionDesarrollo").style.display = "none";
    document.getElementById("flujoProcesosDesarrollo").style.display = "none";
    document.getElementById("webApiDesarrollo").style.display = "none";
    document.getElementById("liberacionDesarrollo").style.display = "none";
    document.getElementById("integracionesDesarrollo").style.display = "none";
    document.getElementById("movilidadDesarrollo").style.display = "none";
    document.getElementById("automatizacionesDesarrollo").style.display = "block";
    document.getElementById("analiticaDesarrollo").style.display = "none";
    document.getElementById("cognitivaDesarrollo").style.display = "none";
  }

  if (b == "analitica") {
    document.getElementById("webDesarrollo").style.display = "none";
    document.getElementById("capaMediaDesarrollo").style.display = "none";
    document.getElementById("proceDatosDesarrollo").style.display = "none";
    document.getElementById("visualizacionDesarrollo").style.display = "none";
    document.getElementById("flujoProcesosDesarrollo").style.display = "none";
    document.getElementById("webApiDesarrollo").style.display = "none";
    document.getElementById("liberacionDesarrollo").style.display = "none";
    document.getElementById("integracionesDesarrollo").style.display = "none";
    document.getElementById("movilidadDesarrollo").style.display = "none";
    document.getElementById("automatizacionesDesarrollo").style.display = "none";
    document.getElementById("analiticaDesarrollo").style.display = "block";
    document.getElementById("cognitivaDesarrollo").style.display = "none";
  }

  if (b == "cognitiva") {
    document.getElementById("webDesarrollo").style.display = "none";
    document.getElementById("capaMediaDesarrollo").style.display = "none";
    document.getElementById("proceDatosDesarrollo").style.display = "none";
    document.getElementById("visualizacionDesarrollo").style.display = "none";
    document.getElementById("flujoProcesosDesarrollo").style.display = "none";
    document.getElementById("webApiDesarrollo").style.display = "none";
    document.getElementById("liberacionDesarrollo").style.display = "none";
    document.getElementById("integracionesDesarrollo").style.display = "none";
    document.getElementById("movilidadDesarrollo").style.display = "none";
    document.getElementById("automatizacionesDesarrollo").style.display = "none";
    document.getElementById("analiticaDesarrollo").style.display = "none";
    document.getElementById("cognitivaDesarrollo").style.display = "block";
  }


  /* Filtro Infraestructura */

  if (b == "solucionesInfra") {
    document.getElementById("solucionesInfra").style.display = "block";
    document.getElementById("BaseDatosInfraestructura").style.display = "none";
    document.getElementById("sistemasOpInfraestructura").style.display = "none";
    document.getElementById("virtualizacionInfra").style.display = "none";
    document.getElementById("redInalambricaInfra").style.display = "none";
  }

  if (b == "basesDatosInfra") {
    document.getElementById("solucionesInfra").style.display = "none";
    document.getElementById("BaseDatosInfraestructura").style.display = "block";
    document.getElementById("sistemasOpInfraestructura").style.display = "none";
    document.getElementById("virtualizacionInfra").style.display = "none";
    document.getElementById("redInalambricaInfra").style.display = "none";
  }

  if (b == "sistemasOperativosInfra") {
    document.getElementById("solucionesInfra").style.display = "none";
    document.getElementById("BaseDatosInfraestructura").style.display = "none";
    document.getElementById("sistemasOpInfraestructura").style.display = "block";
    document.getElementById("virtualizacionInfra").style.display = "none";
    document.getElementById("redInalambricaInfra").style.display = "none";
  }

  if (b == "VirtualizacionInfra") {
    document.getElementById("solucionesInfra").style.display = "none";
    document.getElementById("BaseDatosInfraestructura").style.display = "none";
    document.getElementById("sistemasOpInfraestructura").style.display = "none";
    document.getElementById("virtualizacionInfra").style.display = "block";
    document.getElementById("redInalambricaInfra").style.display = "none";
  }

  if (b == "redInalambrica") {
    document.getElementById("solucionesInfra").style.display = "none";
    document.getElementById("BaseDatosInfraestructura").style.display = "none";
    document.getElementById("sistemasOpInfraestructura").style.display = "none";
    document.getElementById("virtualizacionInfra").style.display = "none";
    document.getElementById("redInalambricaInfra").style.display = "block";
  }

  /* Filtros Multifuncionales */

  if (b == "hardwareMultifuncionales") {
    document.getElementById("hardwareMultifuncionales").style.display = "block";
    document.getElementById("soporteMultifuncionales").style.display = "none";
  }

  if (b == "soporteMultifuncionales") {
    document.getElementById("hardwareMultifuncionales").style.display = "none";
    document.getElementById("soporteMultifuncionales").style.display = "block";
  }

  /* Filtros Seguridad */

  if (b == "accesosSeguridad") {
    document.getElementById("accesosSeguridad").style.display = "block";
    document.getElementById("actualizacionesSeguridad").style.display = "none";
    document.getElementById("basesDatosSeguridad").style.display = "none";
    document.getElementById("conexionesSeguridad").style.display = "none";
    document.getElementById("correoSeguridad").style.display = "none";
    document.getElementById("datosPersonalesSeguridad").style.display = "none";
    document.getElementById("dispositivosSeguridad").style.display = "none";
    document.getElementById("drpSeguridad").style.display = "none";
    document.getElementById("eolSeguridad").style.display = "none";
    document.getElementById("perimetralSeguridad").style.display = "none";
    document.getElementById("soporteRemotoSeguridad").style.display = "none";
    document.getElementById("transaccionalesSeguridad").style.display = "none";
    document.getElementById("versionamientoSeguridad").style.display = "none";
    document.getElementById("webSeguridad").style.display = "none";
  }

  if (b == "actualizacionesSeguridad") {
    document.getElementById("accesosSeguridad").style.display = "none";
    document.getElementById("actualizacionesSeguridad").style.display = "block";
    document.getElementById("basesDatosSeguridad").style.display = "none";
    document.getElementById("conexionesSeguridad").style.display = "none";
    document.getElementById("correoSeguridad").style.display = "none";
    document.getElementById("datosPersonalesSeguridad").style.display = "none";
    document.getElementById("dispositivosSeguridad").style.display = "none";
    document.getElementById("drpSeguridad").style.display = "none";
    document.getElementById("eolSeguridad").style.display = "none";
    document.getElementById("perimetralSeguridad").style.display = "none";
    document.getElementById("soporteRemotoSeguridad").style.display = "none";
    document.getElementById("transaccionalesSeguridad").style.display = "none";
    document.getElementById("versionamientoSeguridad").style.display = "none";
    document.getElementById("webSeguridad").style.display = "none";
  }

  if (b == "basesDatosSeguridad") {
    document.getElementById("accesosSeguridad").style.display = "none";
    document.getElementById("actualizacionesSeguridad").style.display = "none";
    document.getElementById("basesDatosSeguridad").style.display = "block";
    document.getElementById("conexionesSeguridad").style.display = "none";
    document.getElementById("correoSeguridad").style.display = "none";
    document.getElementById("datosPersonalesSeguridad").style.display = "none";
    document.getElementById("dispositivosSeguridad").style.display = "none";
    document.getElementById("drpSeguridad").style.display = "none";
    document.getElementById("eolSeguridad").style.display = "none";
    document.getElementById("perimetralSeguridad").style.display = "none";
    document.getElementById("soporteRemotoSeguridad").style.display = "none";
    document.getElementById("transaccionalesSeguridad").style.display = "none";
    document.getElementById("versionamientoSeguridad").style.display = "none";
    document.getElementById("webSeguridad").style.display = "none";
  }

  if (b == "conexionesSeguridad") {
    document.getElementById("accesosSeguridad").style.display = "none";
    document.getElementById("actualizacionesSeguridad").style.display = "none";
    document.getElementById("basesDatosSeguridad").style.display = "none";
    document.getElementById("conexionesSeguridad").style.display = "block";
    document.getElementById("correoSeguridad").style.display = "none";
    document.getElementById("datosPersonalesSeguridad").style.display = "none";
    document.getElementById("dispositivosSeguridad").style.display = "none";
    document.getElementById("drpSeguridad").style.display = "none";
    document.getElementById("eolSeguridad").style.display = "none";
    document.getElementById("perimetralSeguridad").style.display = "none";
    document.getElementById("soporteRemotoSeguridad").style.display = "none";
    document.getElementById("transaccionalesSeguridad").style.display = "none";
    document.getElementById("versionamientoSeguridad").style.display = "none";
    document.getElementById("webSeguridad").style.display = "none";
  }

  if (b == "correoSeguridad") {
    document.getElementById("accesosSeguridad").style.display = "none";
    document.getElementById("actualizacionesSeguridad").style.display = "none";
    document.getElementById("basesDatosSeguridad").style.display = "none";
    document.getElementById("conexionesSeguridad").style.display = "none";
    document.getElementById("correoSeguridad").style.display = "block";
    document.getElementById("datosPersonalesSeguridad").style.display = "none";
    document.getElementById("dispositivosSeguridad").style.display = "none";
    document.getElementById("drpSeguridad").style.display = "none";
    document.getElementById("eolSeguridad").style.display = "none";
    document.getElementById("perimetralSeguridad").style.display = "none";
    document.getElementById("soporteRemotoSeguridad").style.display = "none";
    document.getElementById("transaccionalesSeguridad").style.display = "none";
    document.getElementById("versionamientoSeguridad").style.display = "none";
    document.getElementById("webSeguridad").style.display = "none";
  }

  if (b == "datosPersonalesSeguridad") {
    document.getElementById("accesosSeguridad").style.display = "none";
    document.getElementById("actualizacionesSeguridad").style.display = "none";
    document.getElementById("basesDatosSeguridad").style.display = "none";
    document.getElementById("conexionesSeguridad").style.display = "none";
    document.getElementById("correoSeguridad").style.display = "none";
    document.getElementById("datosPersonalesSeguridad").style.display = "block";
    document.getElementById("dispositivosSeguridad").style.display = "none";
    document.getElementById("drpSeguridad").style.display = "none";
    document.getElementById("eolSeguridad").style.display = "none";
    document.getElementById("perimetralSeguridad").style.display = "none";
    document.getElementById("soporteRemotoSeguridad").style.display = "none";
    document.getElementById("transaccionalesSeguridad").style.display = "none";
    document.getElementById("versionamientoSeguridad").style.display = "none";
    document.getElementById("webSeguridad").style.display = "none";
  }

  if (b == "dispositivosSeguridad") {
    document.getElementById("accesosSeguridad").style.display = "none";
    document.getElementById("actualizacionesSeguridad").style.display = "none";
    document.getElementById("basesDatosSeguridad").style.display = "none";
    document.getElementById("conexionesSeguridad").style.display = "none";
    document.getElementById("correoSeguridad").style.display = "none";
    document.getElementById("datosPersonalesSeguridad").style.display = "none";
    document.getElementById("dispositivosSeguridad").style.display = "block";
    document.getElementById("drpSeguridad").style.display = "none";
    document.getElementById("eolSeguridad").style.display = "none";
    document.getElementById("perimetralSeguridad").style.display = "none";
    document.getElementById("soporteRemotoSeguridad").style.display = "none";
    document.getElementById("transaccionalesSeguridad").style.display = "none";
    document.getElementById("versionamientoSeguridad").style.display = "none";
    document.getElementById("webSeguridad").style.display = "none";
  }

  if (b == "drpSeguridad") {
    document.getElementById("accesosSeguridad").style.display = "none";
    document.getElementById("actualizacionesSeguridad").style.display = "none";
    document.getElementById("basesDatosSeguridad").style.display = "none";
    document.getElementById("conexionesSeguridad").style.display = "none";
    document.getElementById("correoSeguridad").style.display = "none";
    document.getElementById("datosPersonalesSeguridad").style.display = "none";
    document.getElementById("dispositivosSeguridad").style.display = "none";
    document.getElementById("drpSeguridad").style.display = "block";
    document.getElementById("eolSeguridad").style.display = "none";
    document.getElementById("perimetralSeguridad").style.display = "none";
    document.getElementById("soporteRemotoSeguridad").style.display = "none";
    document.getElementById("transaccionalesSeguridad").style.display = "none";
    document.getElementById("versionamientoSeguridad").style.display = "none";
    document.getElementById("webSeguridad").style.display = "none";
  }

  if (b == "eolSeguridad") {
    document.getElementById("accesosSeguridad").style.display = "none";
    document.getElementById("actualizacionesSeguridad").style.display = "none";
    document.getElementById("basesDatosSeguridad").style.display = "none";
    document.getElementById("conexionesSeguridad").style.display = "none";
    document.getElementById("correoSeguridad").style.display = "none";
    document.getElementById("datosPersonalesSeguridad").style.display = "none";
    document.getElementById("dispositivosSeguridad").style.display = "none";
    document.getElementById("drpSeguridad").style.display = "none";
    document.getElementById("eolSeguridad").style.display = "block";
    document.getElementById("perimetralSeguridad").style.display = "none";
    document.getElementById("soporteRemotoSeguridad").style.display = "none";
    document.getElementById("transaccionalesSeguridad").style.display = "none";
    document.getElementById("versionamientoSeguridad").style.display = "none";
    document.getElementById("webSeguridad").style.display = "none";
  }

  if (b == "perimetralSeguridad") {
    document.getElementById("accesosSeguridad").style.display = "none";
    document.getElementById("actualizacionesSeguridad").style.display = "none";
    document.getElementById("basesDatosSeguridad").style.display = "none";
    document.getElementById("conexionesSeguridad").style.display = "none";
    document.getElementById("correoSeguridad").style.display = "none";
    document.getElementById("datosPersonalesSeguridad").style.display = "none";
    document.getElementById("dispositivosSeguridad").style.display = "none";
    document.getElementById("drpSeguridad").style.display = "none";
    document.getElementById("eolSeguridad").style.display = "none";
    document.getElementById("perimetralSeguridad").style.display = "block";
    document.getElementById("soporteRemotoSeguridad").style.display = "none";
    document.getElementById("transaccionalesSeguridad").style.display = "none";
    document.getElementById("versionamientoSeguridad").style.display = "none";
    document.getElementById("webSeguridad").style.display = "none";
  }

  if (b == "soporteRemotoSeguridad") {
    document.getElementById("accesosSeguridad").style.display = "none";
    document.getElementById("actualizacionesSeguridad").style.display = "none";
    document.getElementById("basesDatosSeguridad").style.display = "none";
    document.getElementById("conexionesSeguridad").style.display = "none";
    document.getElementById("correoSeguridad").style.display = "none";
    document.getElementById("datosPersonalesSeguridad").style.display = "none";
    document.getElementById("dispositivosSeguridad").style.display = "none";
    document.getElementById("drpSeguridad").style.display = "none";
    document.getElementById("eolSeguridad").style.display = "none";
    document.getElementById("perimetralSeguridad").style.display = "none";
    document.getElementById("soporteRemotoSeguridad").style.display = "block";
    document.getElementById("transaccionalesSeguridad").style.display = "none";
    document.getElementById("versionamientoSeguridad").style.display = "none";
    document.getElementById("webSeguridad").style.display = "none";
  }

  if (b == "transaccionalesSeguridad") {
    document.getElementById("accesosSeguridad").style.display = "none";
    document.getElementById("actualizacionesSeguridad").style.display = "none";
    document.getElementById("basesDatosSeguridad").style.display = "none";
    document.getElementById("conexionesSeguridad").style.display = "none";
    document.getElementById("correoSeguridad").style.display = "none";
    document.getElementById("datosPersonalesSeguridad").style.display = "none";
    document.getElementById("dispositivosSeguridad").style.display = "none";
    document.getElementById("drpSeguridad").style.display = "none";
    document.getElementById("eolSeguridad").style.display = "none";
    document.getElementById("perimetralSeguridad").style.display = "none";
    document.getElementById("soporteRemotoSeguridad").style.display = "none";
    document.getElementById("transaccionalesSeguridad").style.display = "block";
    document.getElementById("versionamientoSeguridad").style.display = "none";
    document.getElementById("webSeguridad").style.display = "none";
  }

  if (b == "versionamientoSeguridad") {
    document.getElementById("accesosSeguridad").style.display = "none";
    document.getElementById("actualizacionesSeguridad").style.display = "none";
    document.getElementById("basesDatosSeguridad").style.display = "none";
    document.getElementById("conexionesSeguridad").style.display = "none";
    document.getElementById("correoSeguridad").style.display = "none";
    document.getElementById("datosPersonalesSeguridad").style.display = "none";
    document.getElementById("dispositivosSeguridad").style.display = "none";
    document.getElementById("drpSeguridad").style.display = "none";
    document.getElementById("eolSeguridad").style.display = "none";
    document.getElementById("perimetralSeguridad").style.display = "none";
    document.getElementById("soporteRemotoSeguridad").style.display = "none";
    document.getElementById("transaccionalesSeguridad").style.display = "none";
    document.getElementById("versionamientoSeguridad").style.display = "block";
    document.getElementById("webSeguridad").style.display = "none";
  }

  if (b == "webSeguridad") {
    document.getElementById("accesosSeguridad").style.display = "none";
    document.getElementById("actualizacionesSeguridad").style.display = "none";
    document.getElementById("basesDatosSeguridad").style.display = "none";
    document.getElementById("conexionesSeguridad").style.display = "none";
    document.getElementById("correoSeguridad").style.display = "none";
    document.getElementById("datosPersonalesSeguridad").style.display = "none";
    document.getElementById("dispositivosSeguridad").style.display = "none";
    document.getElementById("drpSeguridad").style.display = "none";
    document.getElementById("eolSeguridad").style.display = "none";
    document.getElementById("perimetralSeguridad").style.display = "none";
    document.getElementById("soporteRemotoSeguridad").style.display = "none";
    document.getElementById("transaccionalesSeguridad").style.display = "none";
    document.getElementById("versionamientoSeguridad").style.display = "none";
    document.getElementById("webSeguridad").style.display = "block";
  }

}

/* Anade la clase */

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

/* Remueve la clase */

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}