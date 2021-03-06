// Generated by CoffeeScript 1.6.2
(function() {
  var Bop, CelestialBody, Dres, Duna, Eeloo, Eve, G, Gilly, HALF_PI, Ike, Jool, Kerbin, Kerbol, Laythe, Minmus, Moho, Mun, Pol, TWO_PI, Tylo, Vall;

  G = 6.674e-11;

  TWO_PI = 2 * Math.PI;

  HALF_PI = 0.5 * Math.PI;

  (typeof exports !== "undefined" && exports !== null ? exports : this).CelestialBody = CelestialBody = (function() {
    function CelestialBody(mass, radius, siderealRotation, orbit, atmPressure) {
      var _ref;

      this.mass = mass;
      this.radius = radius;
      this.siderealRotation = siderealRotation;
      this.orbit = orbit;
      this.atmPressure = atmPressure;
      this.gravitationalParameter = G * this.mass;
      if (this.orbit != null) {
        this.sphereOfInfluence = this.orbit.semiMajorAxis * Math.pow(this.mass / this.orbit.referenceBody.mass, 0.4);
      }
      if ((_ref = this.atmPressure) == null) {
        this.atmPressure = 0;
      }
    }

    CelestialBody.prototype.circularOrbitVelocity = function(altitude) {
      return Math.sqrt(this.gravitationalParameter / (altitude + this.radius));
    };

    CelestialBody.prototype.siderealTimeAt = function(longitude, time) {
      var result;

      result = ((time / this.siderealRotation) * TWO_PI + HALF_PI + longitude) % TWO_PI;
      if (result < 0) {
        return result + TWO_PI;
      } else {
        return result;
      }
    };

    CelestialBody.prototype.name = function() {
      var k, v;

      for (k in CelestialBody) {
        v = CelestialBody[k];
        if (v === this) {
          return k;
        }
      }
    };

    CelestialBody.prototype.children = function() {
      var k, result, v, _ref;

      result = {};
      for (k in CelestialBody) {
        v = CelestialBody[k];
        if ((v != null ? (_ref = v.orbit) != null ? _ref.referenceBody : void 0 : void 0) === this) {
          result[k] = v;
        }
      }
      return result;
    };

    return CelestialBody;

  })();

  CelestialBody.fromJSON = function(json) {
    var orbit;

    if (json.orbit != null) {
      orbit = Orbit.fromJSON(json.orbit);
    }
    return new CelestialBody(json.mass, json.radius, json.siderealRotation, orbit, json.atmPressure);
  };
  //Body(Mass, Radius, Siderial Rotation, Orbit)
  //Orbit(SMA, ecc, incD, LAND, ArgPeriD, MeanAnomAtEpochR)

  CelestialBody.Kerbol = Kerbol = new CelestialBody(1.9891e+30, 696342000, 432000, null);

  CelestialBody.Moho = Moho = new CelestialBody(3.3022e+23, 2439700, 5067031.68, new Orbit(Kerbol, 57908973645.88802, 0.2056187266319207, 5.156, 10.86541167564728, 66.90371044151551, 5.553921));

  CelestialBody.Eve = Eve = new CelestialBody(4.8676e+24, 6051800, 20996798.4, new Orbit(Kerbol, 108209548790.4671, 0.006810339650842032, 1.018, 7.981603378781639, 123.7121294282329, 5.4322674), 90.1);

  CelestialBody.Kerbin = Kerbin = new CelestialBody(5.97258013078e+24, 6371000, 86164.098903691, new Orbit(Kerbol, 149494366257.0978, 0.01609636160505683, 0, 359.9965004168758, 102.9720683296131, 6.23188565452), 1);

  CelestialBody.Mun = Mun = new CelestialBody(7.346295386e+22, 1737100, 2360584.68479999, new Orbit(Kerbin, 384308437.7707066, 0.05328149353682574, 4.917, 2.296616161126016, 199.7640930160823, 3.88686980063));

  CelestialBody.Duna = Duna = new CelestialBody(6.4185e+23, 3396200, 88642.6848, new Orbit(Kerbol, 227949699961.9763, 0.09326110278323557, 1.247, 3.351911063089117, 332.1022655295414, 2.95643613254), 0.0069);
  
  CelestialBody.Bop = Bop = new CelestialBody(1.072E+16, 6100, 300000, new Orbit(Duna, 9378492.209088314, 0.01539938155583979, 36.32433410471867, 46.48212553464923, 357.7759243021914, 0.125404015735));
  
  CelestialBody.Gilly = Gilly = new CelestialBody(1.48e+15, 4200, 300000, new Orbit(Duna, 23458112.01759387, 0.0003294680798661700, 38.2773701383231, 47.51893570799763, 263.8963868784089, 5.64621053066));
  
  CelestialBody.Inaccessable = Inaccessable = new CelestialBody(2.591e+20, 525400, 19233, new Orbit(Kerbol, 353346224946.7701, 0.09020684122542691, 22.76964397203469, 18.16712326538272, 236.4453691648416, 1.06571026036));
  
  CelestialBody.Minmus = Minmus = new CelestialBody(9.43e+20, 487300, 32668, new Orbit(Kerbol, 413738762961.4247, 0.07936348159019736, 27.12733635354748, 23.45016447029047, 129.1910317363294, 1.05003281986));
  
  CelestialBody.Jool = Jool = new CelestialBody(1.8986E+27, 69911000, 35730, new Orbit(Kerbol, 778188938659.7554, 0.04872660654702194, 23.25313306947884,-0.193, 3.262077289923354, 10.75642751202877, 5.28103888595), 15);
  
  CelestialBody.Pol = Pol = new CelestialBody(8.9319e+22, 1821300, 40000, new Orbit(Jool, 422018294.5236953, 0.003545858426216978, 25.46409538664874, 358.0466431678460, 231.2703460977786, 3.40910640619));

  CelestialBody.Eeloo = Eeloo = new CelestialBody(4.7998e+22, 1560800, 1946000, new Orbit(Jool, 671253637.5417169, 0.009511727119926178, 25.70364276471991, 358.9360081847504, 53.13210737539627, 4.821737415499959));
  
  CelestialBody.Tylo = Tylo = new CelestialBody(1.4819E+23, 2634100, 1400000, new Orbit(Jool, 1070823468.894524, 0.001190086418361844, 25.27071366962049, 358.0125219248113, 139.2992571342065, 4.060950472376478));
  
  CelestialBody.Ike = Ike = new CelestialBody(1.075938E+23, 2410300, 1400000, new Orbit(Jool, 1883812366.573522, 0.007973319796896609, 25.44080019822134, 358.5022563372704, 320.7359683492656, 0.27604372240404196));
  
  CelestialBody.Sentar = Sentar = new CelestialBody(5.68356253671e+26, 60268000, 38052, new Orbit(Kerbol, 1424838758613.269, 0.05347166506749872, -0.876, 5.970845343832233, 85.04661202834268, 1.1775536145636778), 20);
  
  CelestialBody.Vall = Vall = new CelestialBody(1.0805E+22, 252300, 118386, new Orbit(Sentar, 238413701.0800748, 0.006227760988943823, 6.681244447404104, 128.4251867930371, 0, 6.049742821754194));
  
  CelestialBody.Erin = Erin = new CelestialBody(1.3452E+23, 2576000, 1377648, new Orbit(Sentar, 1221966238.511425, 0.02891936561555365, 6.460492679775526, 126.4945233702913, 182.0886765021483, 1.311809948776336), 1.45);
  
  CelestialBody.Ringle = Ringle = new CelestialBody(1.8056E+21, 734500, 6853377.6, new Orbit(Sentar, 3560162619.632777, 0.02880295196501136, 14.58599844131410, 50.29393476788486, 314.3823624918355, 2.4359033422444027));
  
  CelestialBody.Skelton = Skelton = new CelestialBody(8.681E+25, 25559000, 62063.712, new Orbit(Kerbol, 2866832853163.975, 0.04620653158718433, 0.227, 1.846089669223938, 169.6876790522249, 5.006070925851672), 50);
  
  CelestialBody.Ablate = Ablate = new CelestialBody(6.59e+19, 235800, 122124.586, new Orbit(Skelton, 129880047.6342133, 0.001187412619655891, 78.58875468399131, 169.0642120548280, 326.7575256534830, 4.415693986072708));
  
  CelestialBody.Thud = Thud = new CelestialBody(3.527E+21, 788400, 752218.618, new Orbit(Skelton, 436292682.9676935, 0.002486915514390927, 75.04576639285051, 166.6555214910122, 165.7455424030808, 3.7115348458603625));
  
  CelestialBody.Laythe = Laythe = new CelestialBody(1.0243E+26, 24764000, 57996, new Orbit(Kerbol, 4497455831858.165, 0.008090397956671817, -1.139, 3.512610707556779, 29.81485499342245, 2.829170814718441), 15);
  
  CelestialBody.Ascension = Ascension = new CelestialBody(2.14e+22, 1353400, 507760.186, new Orbit(Laythe, 354767243.5407871, 0.00001688014345366826, 112.3356618078263, 197.1953239787470, 220.452329169783, 6.259731354209531));
  
  CelestialBody.Dres = Dres = new CelestialBody(1.305e+22, 1153000, 551856.672, new Orbit(Kerbol, 5845670624078.223, 0.2462772488425983, 0.166, 44.36099836994975, 184.4945352163909, 5.238251980021541));
  
  CelestialBody.Pock = Pock = new CelestialBody(1.52e+21, 603500, 551856.707, new Orbit(Dres, 19596193.83540397, 0.00005082225659448947, 96.04393686942416, 222.4053735570010, 188.4738646852448, 0.5393048609025978));
  
  CelestialBody.Joker = Joker = new CelestialBody(1.67e+22, 1163000, 93240, new Orbit(Kerbol, 10178324130743.39, 0.4350029900810782, 64.23859488646704, 26.45099846714985, 166.3405154379678, 2.8091088844976326));
}).call(this);
