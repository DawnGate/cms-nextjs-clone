const posts = {
  pageProps: {
    preview: false,
    post: {
      title: "From Server-side Rendering to Static Generation",
      excerpt:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid dubitas igitur mutare principia naturae? Ita multo sanguine profuso in laetitia et in victoria est mortuus. Omnia contraria, quos etiam insanos esse vultis. Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Quis non odit sordidos, vanos, leves, futtiles? Quasi ego id curem, quid ille aiat aut neget.</p>\n",
      slug: "second-entry",
      date: "2022-06-02T11:21:06",
      featuredImage: {
        node: {
          sourceUrl:
            "https://triprow.com/wp-content/uploads/2014/06/fuji-e1403964208921.jpg",
        },
      },
      author: {
        node: {
          name: "user",
          firstName: "UserName",
          lastName: "LastName",
          avatar: {
            url: "https://secure.gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af?s=96&d=mm&r=g",
          },
        },
      },
      categories: {
        edges: [
          {
            node: {
              name: "Uncategorized",
            },
          },
        ],
      },
      tags: {
        edges: [],
      },
      content:
        '\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hoc ultimum bonorum, quod nunc a me defenditur;&nbsp;<a href="https://nextjs.org/">Vitae autem degendae</a>&nbsp;ratio maxime quidem illis placuit quieta. Duo Reges: constructio interrete. Nam quid possumus facere melius?</p>\n\n\n\n<p><a>This is a button block</a></p>\n\n\n\n<p>Left aligned paragraph.&nbsp;<strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid dubitas igitur mutare principia naturae?</strong>&nbsp;Ita multo sanguine profuso in laetitia et in victoria est mortuus. Omnia contraria, quos etiam insanos esse vultis.&nbsp;<s>Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam.</s>&nbsp;Quis non odit sordidos, vanos, leves, futtiles? Quasi ego id curem, quid ille aiat aut neget.</p>\n\n\n\n<p>Center aligned parapgrah. Duo enim genera quae erant, fecit tria. Et quidem illud ipsum non nimium probo et tantum patior, philosophum loqui de cupiditatibus finiendis. Facillimum id quidem est, inquam.&nbsp;<em>Quamquam ab iis philosophiam et omnes ingenuas disciplinas habemus; An me, inquis, tam amentem putas, ut apud imperitos isto modo loquar?</em>&nbsp;At enim hic etiam dolore. Gloriosa ostentatio in constituendo summo bono. Quis enim potest ea, quae probabilia videantur ei, non probare?</p>\n\n\n\n<p>Right aligned paragraph. Si verbum sequimur, primum longius verbum praepositum quam bonum. Sed ad haec, nisi molestum est, habeo quae velim. Quare, quoniam de primis naturae commodis satis dietum est nunc de maioribus consequentibusque videamus. Quae contraria sunt his, malane?</p>\n\n\n\n<ol><li>Numbered list item 1</li><li>Numbered list item 2</li><li>Numbered list item 3<ol><li>Indented numbered list item 4<ol><li>Super duper indented numbered list item 5</li></ol></li></ol></li></ol>\n\n\n\n<h2>Heading h2</h2>\n\n\n\n<p>Equidem soleo etiam quod uno Graeci, si aliter non possum, idem pluribus verbis exponere. Bonum incolumis acies: misera caecitas. Duo Reges: constructio interrete. Nam si beatus umquam fuisset, beatam vitam usque ad illum a Cyro extructum rogum pertulisset. Quid Zeno? Unum nescio, quo modo possit, si luxuriosus sit, finitas cupiditates habere.</p>\n\n\n\n<pre class="wp-block-code"><code>import Document, { Html, Head, Main, NextScript } from \'next/document\'\n\nexport default class MyDocument extends Document {\n  render() {\n    return (\n      &lt;Html lang="en"&gt;\n        &lt;Head /&gt;\n        &lt;body&gt;\n          &lt;Main /&gt;\n          &lt;NextScript /&gt;\n        &lt;/body&gt;\n      &lt;/Html&gt;\n    )\n  }\n}</code></pre>\n\n\n\n<p>Non semper, inquam; Quis istud possit, inquit, negare? Ut id aliis narrare gestiant? Eam si varietatem diceres, intellegerem, ut etiam non dicente te intellego; Num igitur dubium est, quin, si in re ipsa nihil peccatur a superioribus, verbis illi commodius utantur? Quod autem principium officii quaerunt, melius quam Pyrrho; Egone quaeris, inquit, quid sentiam? Fortasse id optimum, sed ubi illud: Plus semper voluptatis? Qui ita affectus, beatum esse numquam probabis;</p>\n\n\n\n<p>Si verbum sequimur, primum longius verbum praepositum quam bonum. Sed ad haec, nisi molestum est, habeo quae velim. Quare, quoniam de primis naturae commodis satis dietum est nunc de maioribus consequentibusque videamus. Quae contraria sunt his, malane?</p>\n\n\n\n<p>Deque his rebus satis multa in nostris de re publica libris sunt dicta a Laelio. Quarum ambarum rerum cum medicinam pollicetur, luxuriae licentiam pollicetur. Haec bene dicuntur, nec ego repugno, sed inter sese ipsa pugnant.</p>\n\n\n\n<blockquote class="wp-block-quote"><p>Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.</p><cite>-Steve Jobs</cite></blockquote>\n\n\n\n<p>Quis tibi ergo istud dabit praeter Pyrrhonem, Aristonem eorumve similes, quos tu non probas? Uterque enim summo bono fruitur, id est voluptate. Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Quod dicit Epicurus etiam de voluptate, quae minime sint voluptates, eas obscurari saepe et obrui.</p>\n\n\n\n<pre class="wp-block-preformatted">Quis tibi ergo istud dabit praeter Pyrrhonem, Aristonem eorumve similes, quos tu non probas? Uterque enim summo bono fruitur, id est voluptate. Habes, inquam, Cato, formam eorum, de quibus loquor, philosophorum. Quod dicit Epicurus etiam de voluptate, quae minime sint voluptates, eas obscurari saepe et obrui.\n- Lorem ipsum</pre>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quia voluptatem hanc esse sentiunt omnes, quam sensus accipiens movetur et iucunditate quadam perfunditur. Quid est igitur, cur ita semper deum appellet Epicurus beatum et aeternum? Duo Reges: constructio interrete. Sint modo partes vitae beatae. Egone quaeris, inquit, quid sentiam?Example audio</p>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sin laboramus, quis est, qui alienae modum statuat industriae? Mihi enim satis est, ipsis non satis. Summum a vobis bonum voluptas dicitur. Te ipsum, dignissimum maioribus tuis, voluptasne induxit, ut adolescentulus eriperes P. Quid, si etiam iucunda memoria est praeteritorum malorum? Qui autem de summo bono dissentit de tota philosophiae ratione dissentit.Example video</p>\n\n\n\n<p>Nam, ut sint illa vendibiliora, haec uberiora certe sunt. Simus igitur contenti his. Haec para/doca illi, nos admirabilia dicamus. Quae cum magnifice primo dici viderentur, considerata minus probabantur. Duae sunt enim res quoque, ne tu verba solum putes. Summum a vobis bonum voluptas dicitur.</p>\n\n\n\n<p>In quibus doctissimi illi veteres inesse quiddam caeleste et divinum putaverunt. Non autem hoc: igitur ne illud quidem. Quid de Platone aut de Democrito loquar? Quid dubitas igitur mutare principia naturae? His singulis copiose responderi solet, sed quae perspicua sunt longa esse non debent. Qua igitur re ab deo vincitur, si aeternitate non vincitur? Certe, nisi voluptatem tanti aestimaretis.</p>\n\n\n\n<p>A standard full-width cover block</p>\n\n\n\n<p>Duo Reges: constructio interrete. Ita multo sanguine profuso in laetitia et in victoria est mortuus. Semovenda est igitur voluptas, non solum ut recta sequamini, sed etiam ut loqui deceat frugaliter. Ergo illi intellegunt quid Epicurus dicat, ego non intellego? Sed id ne cogitari quidem potest quale sit, ut non repugnet ipsum sibi. Quo tandem modo? Quamquam id quidem licebit iis existimare, qui legerint. Nec vero sum nescius esse utilitatem in historia, non modo voluptatem. Quod autem satis est, eo quicquid accessit, nimium est;</p>\n\n\n\n<figure class="wp-block-image"><img src="https://nextjs.wpengine.com/wp-content/uploads/2020/05/gyorgy-bakos-yB3uwXmokcg-unsplash-1024x683.jpg" alt="" class="wp-image-22"/></figure>\n\n\n\n<p><strong>Two column block</strong></p>\n\n\n\n<p>Quid dubitas igitur mutare principia naturae? His singulis copiose responderi solet, sed quae perspicua sunt longa esse non debent.</p>\n\n\n\n<p>Restincta enim sitis stabilitatem voluptatis habet, inquit, illa autem voluptas ipsius restinctionis in motu est. Ita ne hoc quidem modo paria peccata sunt. Sit hoc ultimum bonorum, quod nunc a me defenditur; Quae sunt igitur communia vobis cum antiquis, iis sic utamur quasi concessis;</p>\n\n\n\n<h3>Another heading h3</h3>\n\n\n\n<p>https://www.youtube.com/embed/13eDfrMgFQM?feature=oembedYouTube embed</p>\n\n\n\n<p>Nam et a te perfici istam disputationem volo, nec tua mihi oratio longa videri potest. Primum quid tu dicis breve? Sed emolumenta communia esse dicuntur, recte autem facta et peccata non habentur communia. Ergo ita: non posse honeste vivi, nisi honeste vivatur? Atque hoc loco similitudines eas, quibus illi uti solent, dissimillimas proferebas. Qui-vere falsone, quaerere mittimus-dicitur oculis se privasse; Bonum incolumis acies: misera caecitas. Sed eum qui audiebant, quoad poterant, defendebant sententiam suam.</p>\n\n\n\n<figure class="wp-block-image size-large"><img loading="lazy" width="1024" height="683" src="http://54.174.101.229/wp-content/uploads/2022/06/claudio-schwarz-ZuT6efbmt8U-unsplash-1024x683.jpg" alt="" class="wp-image-10" srcset="https://vercelsolutions.com/wp-content/uploads/2022/06/claudio-schwarz-ZuT6efbmt8U-unsplash-1024x683.jpg 1024w, https://vercelsolutions.com/wp-content/uploads/2022/06/claudio-schwarz-ZuT6efbmt8U-unsplash-300x200.jpg 300w, https://vercelsolutions.com/wp-content/uploads/2022/06/claudio-schwarz-ZuT6efbmt8U-unsplash-768x512.jpg 768w, https://vercelsolutions.com/wp-content/uploads/2022/06/claudio-schwarz-ZuT6efbmt8U-unsplash-1536x1025.jpg 1536w, https://vercelsolutions.com/wp-content/uploads/2022/06/claudio-schwarz-ZuT6efbmt8U-unsplash-2048x1366.jpg 2048w" sizes="(max-width: 1024px) 100vw, 1024px" /><figcaption>Left aligned image</figcaption></figure>\n\n\n\n<p>Ipse Epicurus fortasse redderet, ut Sextus Peducaeus, Sex. Equidem e Cn. Negat esse eam, inquit, propter se expetendam.&nbsp;Si longus, levis. Quid est igitur, inquit, quod requiras?&nbsp;Quo plebiscito decreta a senatu est consuli quaestio Cn. Quis tibi ergo istud dabit praeter Pyrrhonem, Aristonem eorumve similes, quos tu non probas? Nos quidem Virtutes sic natae sumus, ut tibi serviremus, aliud negotii nihil habemus.</p>\n\n\n\n<p>Illa argumenta propria videamus, cur omnia sint paria peccata. Nihil opus est exemplis hoc facere longius. Atqui iste locus est, Piso, tibi etiam atque etiam confirmandus, inquam; Quid ei reliquisti, nisi te, quoquo modo loqueretur, intellegere, quid diceret? Hanc in motu voluptatem -sic enim has suaves et quasi dulces voluptates appellat-interdum ita extenuat, ut M. Suo genere perveniant ad extremum;</p>\n\n\n\n<p>https://w.soundcloud.com/player/?visual=true&amp;url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F56005581&amp;show_artwork=true&amp;maxwidth=580&amp;maxheight=870&amp;dnt=1SoundCloud Embed</p>\n\n\n\n<h4>Yet Another Heading h4</h4>\n\n\n\n<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod si ita est, sequitur id ipsum, quod te velle video, omnes semper beatos esse sapientes. Indicant pueri, in quibus ut in speculis natura cernitur. Expectoque quid ad id, quod quaerebam, respondeas. Nec tamen ullo modo summum pecudis bonum et hominis idem mihi videri potest. Duo Reges: constructio interrete. ALIO MODO. Cui Tubuli nomen odio non est? Aut haec tibi, Torquate, sunt vituperanda aut patrocinium voluptatis repudiandum.</p>\n',
    },
    posts: {
      edges: [
        {
          node: {
            title:
              "Learn How to Pre-render Pages Using Static Generation with Next.js",
            excerpt:
              "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hoc ultimum bonorum, quod nunc a me defenditur; Vitae autem degendae ratio maxime quidem illis placuit quieta. Duo Reges: constructio interrete. Nam quid possumus facere melius?</p>\n",
            slug: "another-entry",
            date: "2022-06-02T11:19:47",
            featuredImage: {
              node: {
                sourceUrl:
                  "https://triprow.com/wp-content/uploads/2014/06/fuji-e1403964208921.jpg",
              },
            },
            author: {
              node: {
                name: "user",
                firstName: "UserName",
                lastName: "LastName",
                avatar: {
                  url: "https://secure.gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af?s=96&d=mm&r=g",
                },
              },
            },
            categories: {
              edges: [
                {
                  node: {
                    name: "Uncategorized",
                  },
                },
              ],
            },
            tags: {
              edges: [],
            },
          },
        },
        {
          node: {
            title: "Deploying Next.js Apps",
            excerpt:
              "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hoc ultimum bonorum, quod nunc a me defenditur; Vitae autem degendae ratio maxime quidem illis placuit quieta. Duo Reges: constructio interrete. Nam quid possumus facere melius?</p>\n",
            slug: "hello-world",
            date: "2022-06-02T10:57:10",
            featuredImage: {
              node: {
                sourceUrl:
                  "https://triprow.com/wp-content/uploads/2014/06/fuji-e1403964208921.jpg",
              },
            },
            author: {
              node: {
                name: "user",
                firstName: "UserName",
                lastName: "LastName",
                avatar: {
                  url: "https://secure.gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af?s=96&d=mm&r=g",
                },
              },
            },
            categories: {
              edges: [
                {
                  node: {
                    name: "Uncategorized",
                  },
                },
              ],
            },
            tags: {
              edges: [],
            },
          },
        },
      ],
    },
  },
  __N_SSG: true,
};

export const index = {
  pageProps: {
    allPosts: {
      edges: [
        {
          node: {
            title: "From Server-side Rendering to Static Generation",
            excerpt:
              "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid dubitas igitur mutare principia naturae? Ita multo sanguine profuso in laetitia et in victoria est mortuus. Omnia contraria, quos etiam insanos esse vultis. Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Quis non odit sordidos, vanos, leves, futtiles? Quasi ego id curem, quid ille aiat aut neget.</p>\n",
            slug: "second-entry",
            date: "2022-06-02T11:21:06",
            featuredImage: {
              node: {
                sourceUrl:
                  "https://vercelsolutions.com/wp-content/uploads/2022/06/claudio-schwarz-ZuT6efbmt8U-unsplash-scaled.jpg",
              },
            },
            author: {
              node: {
                name: "user",
                firstName: "UserName",
                lastName: "LastName",
                avatar: {
                  url: "https://secure.gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af?s=96&d=mm&r=g",
                },
              },
            },
          },
        },
        {
          node: {
            title:
              "Learn How to Pre-render Pages Using Static Generation with Next.js",
            excerpt:
              "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hoc ultimum bonorum, quod nunc a me defenditur; Vitae autem degendae ratio maxime quidem illis placuit quieta. Duo Reges: constructio interrete. Nam quid possumus facere melius?</p>\n",
            slug: "another-entry",
            date: "2022-06-02T11:19:47",
            featuredImage: {
              node: {
                sourceUrl:
                  "https://vercelsolutions.com/wp-content/uploads/2022/06/hamman-mohamed-C69xTC5q_pE-unsplash-scaled.jpg",
              },
            },
            author: {
              node: {
                name: "user",
                firstName: "UserName",
                lastName: "LastName",
                avatar: {
                  url: "https://secure.gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af?s=96&d=mm&r=g",
                },
              },
            },
          },
        },
        {
          node: {
            title: "Deploying Next.js Apps",
            excerpt:
              "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit hoc ultimum bonorum, quod nunc a me defenditur; Vitae autem degendae ratio maxime quidem illis placuit quieta. Duo Reges: constructio interrete. Nam quid possumus facere melius?</p>\n",
            slug: "hello-world",
            date: "2022-06-02T10:57:10",
            featuredImage: {
              node: {
                sourceUrl:
                  "https://vercelsolutions.com/wp-content/uploads/2022/06/hamman-mohamed-C69xTC5q_pE-unsplash-scaled.jpg",
              },
            },
            author: {
              node: {
                name: "user",
                firstName: "UserName",
                lastName: "LastName",
                avatar: {
                  url: "https://secure.gravatar.com/avatar/b58996c504c5638798eb6b511e6f49af?s=96&d=mm&r=g",
                },
              },
            },
          },
        },
      ],
    },
    preview: false,
  },
  __N_SSG: true,
};

export default posts;
