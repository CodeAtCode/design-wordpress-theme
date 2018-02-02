# Italia WordPress Theme #

Uno starter theme Wordpress implementa le linee guida e gli strumenti di design di Italia.it

## Questo tema supporta qualche plugins? ##

Il tema Italia attualmente include il supporto per Jetpack, il plugin ufficiale di Automattic.

## Strumenti e ambiente di sviluppo ##

Il tema viene sviluppato e mantenuto grazie al task runner [Gulp](https://github.com/gulpjs/gulp)

I task attualmente disponibili sono:

* gulp - task default che compila Sass, minifica CSS con un watcher su tutti i file per il livereload
* sass - compila i file presenti all'interno della cartella ``scss``
* minify-css - minifica tutti i file CSS presenti nella root del tema
* live-reload - minifica i CSS e ricarica la pagina

### Ambiente di sviluppo ###

È fortemente consigliato sviluppare in locale attraverso Docker, per generare un container adeguato basta avere WordPress su Apache o nginx, phpMyAdmin e MySQL. [Qui](https://github.com/EugenioPetulla/wp-docker) puoi trovare uno script bash per generare comodamente Container per lo sviluppo locale in WordPress in pochi minuti.

In alternativa, se preferisci le Virtual Machine e Vagrant, consiglio l'ottima macchina [VVV](https://github.com/Varying-Vagrant-Vagrants/VVV) piena di tool utilissimi.

### Come configurare gulpfile.js per il proprio ambiente di sviluppo ###

Attualmente Gulp è configurato per servire dei file da un server posizionato in ``localhost:8080``. In caso la tua installazione locale di WordPress si trovasse in un'altra posizione ti basterà modificare il valore della variabile ``url`` che trovi in cima al file.

## Changelog ##

### 1.0 - Feb 01 2018 ###
* Prima release

## Credits ##

* normalize.css https://necolas.github.io/normalize.css/, (C) 2012-2016 Nicolas Gallagher and Jonathan Neal, [MIT](https://opensource.org/licenses/MIT)