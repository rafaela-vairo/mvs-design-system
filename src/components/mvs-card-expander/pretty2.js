! function ()
{
	var a = !1,
		b = /xyz/.test(function ()
		{
			xyz
		}) ? /\b_super\b/ : /.*/;
	this.Class = function () {}, Class.extend = function (c)
	{
		function d()
		{
			!a && this.init && this.init.apply(this, arguments)
		}
		var e = this.prototype;
		a = !0;
		var f = new this;
		a = !1;
		for (var g in c) f[g] = "function" == typeof c[g] && "function" == typeof e[g] && b.test(c[g]) ? function (a, b)
		{
			return function ()
			{
				var c = this._super;
				this._super = e[a];
				var d = b.apply(this, arguments);
				return this._super = c, d
			}
		}(g, c[g]) : c[g];
		return d.prototype = f, d.prototype.constructor = d, d.extend = arguments.callee, d
	}
}(),
function ()
{
	var a;
	a = window.jQuery || window.Zepto || window.$, a.fn.fancySelect = function (b)
	{
		var c, d;
		return null == b && (b = {}), d = a.extend(
		{
			forceiOS: !1,
			includeBlank: !1
		}, b), c = !!navigator.userAgent.match(/iP(hone|od|ad)/i), this.each(function ()
		{
			var b, e, f, g, h, i, j;
			return g = a(this), g.hasClass("fancified") || "SELECT" !== g[0].tagName ? void 0 : (g.addClass("fancified"), g.css(
			{
				width: 1,
				height: 1,
				display: "block",
				position: "absolute",
				top: 0,
				left: 0,
				opacity: 0
			}), g.wrap('<div class="fancy-select">'), j = g.parent(), g.data("class") && j.addClass(g.data("class")), j.append('<div class="trigger">'), (!c || d.forceiOS) && j.append('<ul class="options">'), h = j.find(".trigger"), f = j.find(".options"), e = g.prop("disabled"), e && j.addClass("disabled"), i = function ()
			{
				return h.text(g.find(":selected").text())
			}, g.on("blur", function ()
			{
				return h.hasClass("open") ? setTimeout(function ()
				{
					return h.trigger("close")
				}, 120) : void 0
			}), h.on("close", function ()
			{
				return h.removeClass("open"), f.removeClass("open")
			}), h.on("click", function ()
			{
				var b, i;
				if (!e)
					if (h.toggleClass("open"), c && !d.forceiOS)
					{
						if (h.hasClass("open")) return g.focus()
					}
				else if (h.hasClass("open") && (i = h.parent(), b = i.offsetParent(), i.offset().top + i.outerHeight() + f.outerHeight() + 20 > a(window).height() + a(window).scrollTop() ? f.addClass("overflowing") : f.removeClass("overflowing")), f.toggleClass("open"), !c) return g.focus()
			}), g.on("enable", function ()
			{
				return g.prop("disabled", !1), j.removeClass("disabled"), e = !1, b()
			}), g.on("disable", function ()
			{
				return g.prop("disabled", !0), j.addClass("disabled"), e = !0
			}), g.on("change", function (a)
			{
				return a.originalEvent && a.originalEvent.isTrusted ? a.stopPropagation() : i()
			}), g.on("keydown", function (a)
			{
				var b, c, d;
				if (d = a.which, b = f.find(".hover"), b.removeClass("hover"), f.hasClass("open"))
				{
					if (38 === d ? (a.preventDefault(), b.length && b.index() > 0 ? b.prev().addClass("hover") : f.find("li:last-child").addClass("hover")) : 40 === d ? (a.preventDefault(), b.length && b.index() < f.find("li").length - 1 ? b.next().addClass("hover") : f.find("li:first-child").addClass("hover")) : 27 === d ? (a.preventDefault(), h.trigger("click")) : 13 === d || 32 === d ? (a.preventDefault(), b.trigger("click")) : 9 === d && h.hasClass("open") && h.trigger("close"), c = f.find(".hover"), c.length) return f.scrollTop(0), f.scrollTop(c.position().top - 12)
				}
				else if (13 === d || 32 === d || 38 === d || 40 === d) return a.preventDefault(), h.trigger("click")
			}), f.on("click", "li", function (b)
			{
				return g.val(a(this).data("value")), c || g.trigger("blur").trigger("focus"), f.find(".selected").removeClass("selected"), a(b.currentTarget).addClass("selected"), g.val(a(this).data("value")).trigger("change").trigger("blur").trigger("focus")
			}), f.on("mouseenter", "li", function ()
			{
				var b, c;
				return c = a(this), b = f.find(".hover"), b.removeClass("hover"), c.addClass("hover")
			}), f.on("mouseleave", "li", function ()
			{
				return f.find(".hover").removeClass("hover")
			}), b = function ()
			{
				var b;
				return i(), !c || d.forceiOS ? (b = g.find("option"), g.find("option").each(function (b, c)
				{
					return c = a(c), c.prop("disabled") || !c.val() && !d.includeBlank ? void 0 : c.prop("selected") ? f.append('<li data-value="' + c.val() + '" class="selected">' + c.text() + "</li>") : f.append('<li data-value="' + c.val() + '">' + c.text() + "</li>")
				})) : void 0
			}, g.on("update", function ()
			{
				return j.find(".options").empty(), b()
			}), b())
		})
	}
}.call(this), ! function (a, b, c, d)
	{
		"use strict";

		function e(a)
		{
			var b = a.currentTarget,
				d = a.data ? a.data.options :
				{},
				e = a.data ? a.data.items : [],
				f = "",
				g = 0;
			a.preventDefault(), a.stopPropagation(), c(b).attr("data-fancybox") && (f = c(b).data("fancybox")), f ? (e = e.length ? e.filter('[data-fancybox="' + f + '"]') : c("[data-fancybox=" + f + "]"), g = e.index(b)) : e = [b], c.fancybox.open(e, d, g)
		}
		if (!c) return d;
		var f = {
				speed: 330,
				loop: !0,
				opacity: "auto",
				margin: [44, 0],
				gutter: 30,
				infobar: !0,
				buttons: !0,
				slideShow: !0,
				fullScreen: !0,
				thumbs: !0,
				closeBtn: !0,
				smallBtn: "auto",
				image:
				{
					preload: "auto",
					protect: !1
				},
				ajax:
				{
					settings:
					{
						data:
						{
							fancybox: !0
						}
					}
				},
				iframe:
				{
					tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
					preload: !0,
					scrolling: "no",
					css:
					{}
				},
				baseClass: "",
				slideClass: "",
				baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-controls"><div class="fancybox-infobar"><button data-fancybox-previous class="fancybox-button fancybox-button--left" title="Previous"></button><div class="fancybox-infobar__body"><span class="js-fancybox-index"></span>&nbsp;/&nbsp;<span class="js-fancybox-count"></span></div><button data-fancybox-next class="fancybox-button fancybox-button--right" title="Next"></button></div><div class="fancybox-buttons"><button data-fancybox-close class="fancybox-button fancybox-button--close" title="Close (Esc)"></button></div></div><div class="fancybox-slider-wrap"><div class="fancybox-slider"></div></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div>',
				spinnerTpl: '<div class="fancybox-loading"></div>',
				errorTpl: '<div class="fancybox-error"><p>The requested content cannot be loaded. <br /> Please try again later.<p></div>',
				closeTpl: '<button data-fancybox-close class="fancybox-close-small">×</button>',
				parentEl: "body",
				touch: !0,
				keyboard: !0,
				focus: !0,
				closeClickOutside: !0,
				beforeLoad: c.noop,
				afterLoad: c.noop,
				beforeMove: c.noop,
				afterMove: c.noop,
				onComplete: c.noop,
				onInit: c.noop,
				beforeClose: c.noop,
				afterClose: c.noop,
				onActivate: c.noop,
				onDeactivate: c.noop
			},
			g = c(a),
			h = c(b),
			i = 0,
			j = function (a)
			{
				return a && a.hasOwnProperty && a instanceof c
			},
			k = function ()
			{
				return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || function (b)
				{
					a.setTimeout(b, 1e3 / 60)
				}
			}(),
			l = function (d)
			{
				var e;
				return "function" == typeof c && d instanceof c && (d = d[0]), e = d.getBoundingClientRect(), e.bottom > 0 && e.right > 0 && e.left < (a.innerWidth || b.documentElement.clientWidth) && e.top < (a.innerHeight || b.documentElement.clientHeight)
			},
			m = function (a, d, e)
			{
				var g = this;
				g.opts = c.extend(!0,
				{
					index: e
				}, f, d ||
				{}), g.id = g.opts.id || ++i, g.group = [], g.currIndex = parseInt(g.opts.index, 10) || 0, g.prevIndex = null, g.prevPos = null, g.currPos = 0, g.firstRun = null, g.createGroup(a), g.group.length && (g.$lastFocus = c(b.activeElement).blur(), g.slides = {}, g.init(a))
			};
		c.extend(m.prototype,
		{
			init: function ()
			{
				var a, b, d = this;
				d.scrollTop = g.scrollTop(), d.scrollLeft = g.scrollLeft(), c.fancybox.isTouch || c("html").hasClass("fancybox-enabled") || (a = c("body").width(), c("html").addClass("fancybox-enabled"), a = c("body").width() - a, a > 1 && c('<style id="fancybox-noscroll" type="text/css">').html(".compensate-for-scrollbar, .fancybox-enabled body { margin-right: " + a + "px; }").appendTo("head")), b = c(d.opts.baseTpl).attr("id", "fancybox-container-" + d.id).data("FancyBox", d).addClass(d.opts.baseClass).hide().prependTo(d.opts.parentEl), d.$refs = {
					container: b,
					bg: b.find(".fancybox-bg"),
					controls: b.find(".fancybox-controls"),
					buttons: b.find(".fancybox-buttons"),
					slider_wrap: b.find(".fancybox-slider-wrap"),
					slider: b.find(".fancybox-slider"),
					caption: b.find(".fancybox-caption")
				}, d.trigger("onInit"), d.activate(), d.current || d.jumpTo(d.currIndex)
			},
			createGroup: function (a)
			{
				var b = this,
					e = c.makeArray(a);
				c.each(e, function (a, e)
				{
					var f, g, h, i, j = {},
						k = {},
						l = [];
					c.isPlainObject(e) ? (j = e, k = e.opts ||
					{}) : "object" === c.type(e) && c(e).length ? (f = c(e), l = f.data(), k = "options" in l ? l.options :
					{}, k = "object" === c.type(k) ? k :
					{}, j.type = "type" in l ? l.type : k.type, j.src = "src" in l ? l.src : k.src || f.attr("href"), k.width = "width" in l ? l.width : k.width, k.height = "height" in l ? l.height : k.height, k.thumb = "thumb" in l ? l.thumb : k.thumb, k.selector = "selector" in l ? l.selector : k.selector, "srcset" in l && (k.image = {
						srcset: l.srcset
					}), k.$orig = f) : j = {
						type: "html",
						content: e + ""
					}, j.opts = c.extend(!0,
					{}, b.opts, k), g = j.type, h = j.src || "", g || (j.content ? g = "html" : h.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? g = "image" : h.match(/\.(pdf)((\?|#).*)?$/i) ? g = "pdf" : "#" === h.charAt(0) && (g = "inline"), j.type = g), j.index = b.group.length, j.opts.$orig && !j.opts.$orig.length && delete j.opts.$orig, !j.opts.$thumb && j.opts.$orig && (j.opts.$thumb = j.opts.$orig.find("img:first")), j.opts.$thumb && !j.opts.$thumb.length && delete j.opts.$thumb, "function" === c.type(j.opts.caption) ? j.opts.caption = j.opts.caption.apply(e, [b, j]) : "caption" in l ? j.opts.caption = l.caption : k.$orig && (j.opts.caption = f.attr("title")), j.opts.caption = j.opts.caption === d ? "" : j.opts.caption + "", "ajax" === g && (i = h.split(/\s+/, 2), i.length > 1 && (j.src = i.shift(), j.opts.selector = i.shift())), "auto" == j.opts.smallBtn && (c.inArray(g, ["html", "inline", "ajax"]) > -1 ? (j.opts.buttons = !1, j.opts.smallBtn = !0) : j.opts.smallBtn = !1), "pdf" === g && (j.type = "iframe", j.opts.closeBtn = !0, j.opts.smallBtn = !1, j.opts.iframe.preload = !1), j.opts.modal && c.extend(!0, j.opts,
					{
						infobar: 0,
						buttons: 0,
						keyboard: 0,
						slideShow: 0,
						fullScreen: 0,
						closeClickOutside: 0
					}), b.group.push(j)
				})
			},
			addEvents: function ()
			{
				var d = this,
					e = function ()
					{
						g.scrollTop(d.scrollTop).scrollLeft(d.scrollLeft), d.$refs.slider_wrap.show(), d.update()
					};
				d.removeEvents(), d.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (a)
				{
					a.stopPropagation(), a.preventDefault(), d.close(a)
				}).on("click.fb-previous", "[data-fancybox-previous]", function (a)
				{
					a.stopPropagation(), a.preventDefault(), d.previous()
				}).on("click.fb-next", "[data-fancybox-next]", function (a)
				{
					a.stopPropagation(), a.preventDefault(), d.next()
				}), c(a).on("orientationchange.fb resize.fb", function (a)
				{
					k(function ()
					{
						a && a.originalEvent && "orientationchange" == a.originalEvent.type ? (d.$refs.slider_wrap.hide(), k(e)) : e()
					})
				}), h.on("focusin.fb", function (a)
				{
					var b = c.fancybox ? c.fancybox.getInstance() : null;
					!b || c(a.target).hasClass("fancybox-container") || c.contains(b.$refs.container[0], a.target) || (a.stopPropagation(), b.focus(), g.scrollTop(d.scrollTop).scrollLeft(d.scrollLeft))
				}), c(b).on("keydown.fb", function (a)
				{
					var b = d.current,
						e = a.keyCode || a.which;
					if (b && b.opts.keyboard && !c(a.target).is("input") && !c(a.target).is("textarea"))
					{
						if (8 === e || 27 === e) return a.preventDefault(), void d.close(a);
						switch (e)
						{
						case 37:
						case 38:
							a.preventDefault(), d.previous();
							break;
						case 39:
						case 40:
							a.preventDefault(), d.next();
							break;
						case 80:
						case 32:
							a.preventDefault(), d.SlideShow && (a.preventDefault(), d.SlideShow.toggle());
							break;
						case 70:
							d.FullScreen && (a.preventDefault(), d.FullScreen.toggle());
							break;
						case 71:
							d.Thumbs && (a.preventDefault(), d.Thumbs.toggle())
						}
					}
				})
			},
			removeEvents: function ()
			{
				g.off("scroll.fb resize.fb orientationchange.fb"), h.off("keydown.fb focusin.fb click.fb-close"), this.$refs.container.off("click.fb-close click.fb-previous click.fb-next")
			},
			previous: function (a)
			{
				this.jumpTo(this.currIndex - 1, a)
			},
			next: function (a)
			{
				this.jumpTo(this.currIndex + 1, a)
			},
			jumpTo: function (a, b)
			{
				var c, e, f, g, h = this;
				if (c = h.firstRun = null === h.firstRun, e = f = a = parseInt(a, 10), g = !!h.current && h.current.opts.loop, !h.isAnimating && (e != h.currIndex || c))
				{
					if (h.group.length > 1 && g) e %= h.group.length, e = 0 > e ? h.group.length + e : e, 2 == h.group.length ? f = a - h.currIndex + h.currPos : (f = e - h.currIndex + h.currPos, Math.abs(h.currPos - (f + h.group.length)) < Math.abs(h.currPos - f) ? f += h.group.length : Math.abs(h.currPos - (f - h.group.length)) < Math.abs(h.currPos - f) && (f -= h.group.length));
					else if (!h.group[e]) return void h.update(!1, !1, b);
					h.current && (h.current.$slide.removeClass("fancybox-slide--current fancybox-slide--complete"), h.updateSlide(h.current, !0)), h.prevIndex = h.currIndex, h.prevPos = h.currPos, h.currIndex = e, h.currPos = f, h.current = h.createSlide(f), h.group.length > 1 && ((h.opts.loop || f - 1 >= 0) && h.createSlide(f - 1), (h.opts.loop || f + 1 < h.group.length) && h.createSlide(f + 1)), h.current.isMoved = !1, h.current.isComplete = !1, b = parseInt(b === d ? 1.5 * h.current.opts.speed : b, 10), h.trigger("beforeMove"), h.updateControls(), c && (h.current.$slide.addClass("fancybox-slide--current"), h.$refs.container.show(), k(function ()
					{
						h.$refs.bg.css("transition-duration", h.current.opts.speed + "ms"), h.$refs.container.addClass("fancybox-container--ready")
					})), h.update(!0, !1, c ? 0 : b, function ()
					{
						h.afterMove()
					}), h.loadSlide(h.current), c && h.current.$ghost || h.preload()
				}
			},
			createSlide: function (a)
			{
				var b, d, e, f = this;
				if (d = a % f.group.length, d = 0 > d ? f.group.length + d : d, !f.slides[a] && f.group[d])
				{
					if (f.opts.loop && f.group.length > 2)
						for (var g in f.slides)
							if (f.slides[g].index === d) return e = f.slides[g], e.pos = a, f.slides[a] = e, delete f.slides[g], f.updateSlide(e), e;
					b = c('<div class="fancybox-slide"></div>').appendTo(f.$refs.slider), f.slides[a] = c.extend(!0,
					{}, f.group[d],
					{
						pos: a,
						$slide: b,
						isMoved: !1,
						isLoaded: !1
					})
				}
				return f.slides[a]
			},
			zoomInOut: function (a, b, d)
			{
				var e, f, g, h = this,
					i = h.current,
					j = i.$placeholder,
					m = i.opts.opacity,
					n = i.opts.$thumb,
					o = n ? n.offset() : 0,
					p = i.$slide.offset();
				return !(!(j && i.isMoved && o && l(n)) || "In" === a && !h.firstRun || (c.fancybox.stop(j), h.isAnimating = !0, e = {
					top: o.top - p.top + parseFloat(n.css("border-top-width") || 0),
					left: o.left - p.left + parseFloat(n.css("border-left-width") || 0),
					width: n.width(),
					height: n.height(),
					scaleX: 1,
					scaleY: 1
				}, "auto" == m && (m = Math.abs(i.width / i.height - e.width / e.height) > .1), "In" === a ? (f = e, g = h.getFitPos(i), g.scaleX = g.width / f.width, g.scaleY = g.height / f.height, m && (f.opacity = .1, g.opacity = 1)) : (f = c.fancybox.getTranslate(j), g = e, i.$ghost && (i.$ghost.show(), i.$image && i.$image.remove()), f.scaleX = f.width / g.width, f.scaleY = f.height / g.height, f.width = g.width, f.height = g.height, m && (g.opacity = 0)), h.updateCursor(g.width, g.height), delete g.width, delete g.height, c.fancybox.setTranslate(j, f), j.show(), h.trigger("beforeZoom" + a), k(function ()
				{
					j.css("transition", "all " + b + "ms"), c.fancybox.setTranslate(j, g), setTimeout(function ()
					{
						k(function ()
						{
							var b;
							j.css("transition", "none"), b = c.fancybox.getTranslate(j), b.scaleX = 1, b.scaleY = 1, c.fancybox.setTranslate(j, b), h.trigger("afterZoom" + a), d.apply(h), h.isAnimating = !1
						})
					}, b)
				}), 0))
			},
			canPan: function ()
			{
				var a = this,
					b = a.current,
					c = b.$placeholder,
					d = !1;
				return c && (d = a.getFitPos(b), d = Math.abs(c.width() - d.width) > 1 || Math.abs(c.height() - d.height) > 1), d
			},
			isScaledDown: function ()
			{
				var a = this,
					b = a.current,
					d = b.$placeholder,
					e = !1;
				return d && (e = c.fancybox.getTranslate(d), e = e.width < b.width || e.height < b.height), e
			},
			scaleToActual: function (a, b, e)
			{
				var f, g, h, i, j, k = this,
					l = k.current,
					m = l.$placeholder,
					n = parseInt(l.$slide.width(), 10),
					o = parseInt(l.$slide.height(), 10),
					p = l.width,
					q = l.height;
				m && (k.isAnimating = !0, a = a === d ? .5 * n : a, b = b === d ? .5 * o : b, f = c.fancybox.getTranslate(m), i = p / f.width, j = q / f.height, g = .5 * n - .5 * p, h = .5 * o - .5 * q, p > n && (g = f.left * i - (a * i - a), g > 0 && (g = 0), n - p > g && (g = n - p)), q > o && (h = f.top * j - (b * j - b), h > 0 && (h = 0), o - q > h && (h = o - q)), k.updateCursor(p, q), c.fancybox.animate(m, null,
				{
					top: h,
					left: g,
					scaleX: i,
					scaleY: j
				}, e || l.opts.speed, function ()
				{
					k.isAnimating = !1
				}))
			},
			scaleToFit: function (a)
			{
				var b, d = this,
					e = d.current,
					f = e.$placeholder;
				f && (d.isAnimating = !0, b = d.getFitPos(e), d.updateCursor(b.width, b.height), c.fancybox.animate(f, null,
				{
					top: b.top,
					left: b.left,
					scaleX: b.width / f.width(),
					scaleY: b.height / f.height()
				}, a || e.opts.speed, function ()
				{
					d.isAnimating = !1
				}))
			},
			getFitPos: function (a)
			{
				var b, d, e, f, h, i, j, k = a.$placeholder || a.$content,
					l = a.width,
					m = a.height,
					n = a.opts.margin;
				return !(!k || !k.length || !l && !m) && ("number" === c.type(n) && (n = [n, n]), 2 == n.length && (n = [n[0], n[1], n[0], n[1]]), g.width() < 800 && (n = [0, 0, 0, 0]), b = parseInt(a.$slide.width(), 10) - (n[1] + n[3]), d = parseInt(a.$slide.height(), 10) - (n[0] + n[2]), e = Math.min(1, b / l, d / m), i = Math.floor(e * l), j = Math.floor(e * m), f = Math.floor(.5 * (d - j)) + n[0], h = Math.floor(.5 * (b - i)) + n[3],
				{
					top: f,
					left: h,
					width: i,
					height: j
				})
			},
			update: function (a, b, d, e)
			{
				var f = this,
					g = f.current.pos * Math.floor(f.current.$slide.width()) * -1 - f.current.pos * f.current.opts.gutter;
				f.isAnimating !== !0 && (d = parseInt(d, 10) || 0, c.fancybox.stop(f.$refs.slider), a === !1 ? f.updateSlide(f.current, b) : c.each(f.slides, function (a, c)
				{
					f.updateSlide(c, b)
				}), d ? c.fancybox.animate(f.$refs.slider, null,
				{
					top: 0,
					left: g
				}, d, function ()
				{
					f.current.isMoved = !0, "function" === c.type(e) && e.apply(f)
				}) : (c.fancybox.setTranslate(f.$refs.slider,
				{
					top: 0,
					left: g
				}), f.current.isMoved = !0, "function" === c.type(e) && e.apply(f)))
			},
			updateSlide: function (a, b)
			{
				var d, e = this,
					f = a.$placeholder;
				a = a || e.current, a && !e.isClosing && (d = a.pos * Math.floor(a.$slide.width()) + a.pos * a.opts.gutter, d !== a.leftPos && (c.fancybox.setTranslate(a.$slide,
				{
					top: 0,
					left: d
				}), a.leftPos = d), b !== !1 && f && (c.fancybox.setTranslate(f, e.getFitPos(a)), a.pos === e.currPos && e.updateCursor()), a.$slide.trigger("refresh"), e.trigger("onUpdate", a))
			},
			updateCursor: function (a, b)
			{
				var c, e = this,
					f = e.$refs.container.removeClass("fancybox-controls--canzoomIn fancybox-controls--canzoomOut fancybox-controls--canGrab");
				!e.isClosing && e.opts.touch && (c = a !== d && b !== d ? a < e.current.width && b < e.current.height : e.isScaledDown(), c ? f.addClass("fancybox-controls--canzoomIn") : e.group.length < 2 ? f.addClass("fancybox-controls--canzoomOut") : f.addClass("fancybox-controls--canGrab"))
			},
			loadSlide: function (a)
			{
				var b, d, e, f = this;
				if (a && !a.isLoaded && !a.isLoading)
				{
					switch (a.isLoading = !0, f.trigger("beforeLoad", a), b = a.type, d = a.$slide, d.off("refresh").trigger("onReset").addClass("fancybox-slide--" + (b || "unknown")).addClass(a.opts.slideClass), b)
					{
					case "image":
						f.setImage(a);
						break;
					case "iframe":
						f.setIframe(a);
						break;
					case "html":
						f.setContent(a, a.content);
						break;
					case "inline":
						c(a.src).length ? f.setContent(a, c(a.src)) : f.setError(a);
						break;
					case "ajax":
						f.showLoading(a), e = c.ajax(c.extend(
						{}, a.opts.ajax.settings,
						{
							url: a.src,
							success: function (b, c)
							{
								"success" === c && f.setContent(a, b)
							},
							error: function (b, c)
							{
								b && "abort" !== c && f.setError(a)
							}
						})), d.one("onReset", function ()
						{
							e.abort()
						});
						break;
					default:
						f.setError(a)
					}
					return !0
				}
			},
			setImage: function (b)
			{
				var d, e, f, g, h = this,
					i = b.opts.image.srcset;
				if (b.isLoaded && !b.hasError) return void h.afterLoad(b);
				if (i)
				{
					f = a.devicePixelRatio || 1, g = a.innerWidth * f, e = i.split(",").map(function (a)
					{
						var b = {};
						return a.trim().split(/\s+/).forEach(function (a, c)
						{
							var d = parseInt(a.substring(0, a.length - 1), 10);
							return 0 === c ? b.url = a : void(d && (b.value = d, b.postfix = a[a.length - 1]))
						}), b
					}), e.sort(function (a, b)
					{
						return a.value - b.value
					});
					for (var j = 0; j < e.length; j++)
					{
						var k = e[j];
						if ("w" === k.postfix && k.value >= g || "x" === k.postfix && k.value >= f)
						{
							d = k;
							break
						}
					}!d && e.length && (d = e[e.length - 1]), d && (b.src = d.url, b.width && b.height && "w" == d.postfix && (b.height = b.width / b.height * d.value, b.width = d.value))
				}
				b.$placeholder = c('<div class="fancybox-placeholder"></div>').hide().appendTo(b.$slide), b.opts.preload !== !1 && b.opts.width && b.opts.height && (b.opts.thumb || b.opts.$thumb) ? (b.width = b.opts.width, b.height = b.opts.height, b.$ghost = c("<img />").one("load error", function ()
				{
					h.isClosing || (c("<img/>")[0].src = b.src, h.revealImage(b, function ()
					{
						h.setBigImage(b), h.firstRun && b.index === h.currIndex && h.preload()
					}))
				}).addClass("fancybox-image").appendTo(b.$placeholder).attr("src", b.opts.thumb || b.opts.$thumb.attr("src"))) : h.setBigImage(b)
			},
			setBigImage: function (a)
			{
				var b = this,
					d = c("<img />");
				a.$image = d.one("error", function ()
				{
					b.setError(a)
				}).one("load", function ()
				{
					clearTimeout(a.timouts), a.timouts = null, b.isClosing || (a.width = this.naturalWidth, a.height = this.naturalHeight, a.opts.image.srcset && d.attr("sizes", "100vw").attr("srcset", a.opts.image.srcset), b.afterLoad(a), a.$ghost && (a.timouts = setTimeout(function ()
					{
						a.$ghost.hide()
					}, 350)))
				}).addClass("fancybox-image").attr("src", a.src).appendTo(a.$placeholder), d[0].complete ? d.trigger("load") : d[0].error ? d.trigger("error") : a.timouts = setTimeout(function ()
				{
					d[0].complete || a.hasError || b.showLoading(a)
				}, 150), a.opts.image.protect && c('<div class="fancybox-spaceball"></div>').appendTo(a.$placeholder).on("contextmenu.fb", function (a)
				{
					return 2 == a.button && a.preventDefault(), !0
				})
			},
			revealImage: function (a, b)
			{
				var d = this;
				return b = b || c.noop, "image" !== a.type || a.hasError || a.isRevealed === !0 ? void b.apply(d) : (a.isRevealed = !0, void(a.pos === d.currPos && d.zoomInOut("In", a.opts.speed, b) || (a.$ghost && !a.isLoaded && d.updateSlide(a, !0), a.pos === d.currPos ? c.fancybox.animate(a.$placeholder,
				{
					opacity: 0
				},
				{
					opacity: 1
				}, 300, b) : a.$placeholder.show(), b.apply(d))))
			},
			setIframe: function (a)
			{
				var b, e = this,
					f = a.opts.iframe,
					g = a.$slide;
				a.$content = c('<div class="fancybox-content"></div>').css(f.css).appendTo(g), b = c(f.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr("scrolling", c.fancybox.isTouch ? "auto" : f.scrolling).appendTo(a.$content), f.preload ? (a.$content.addClass("fancybox-tmp"), e.showLoading(a), b.on("load.fb error.fb", function (b)
				{
					this.isReady = 1, a.$slide.trigger("refresh"), e.afterLoad(a)
				}), g.on("refresh.fb", function ()
				{
					var a, c, e, g, h, i = j.$content;
					if (1 === b[0].isReady)
					{
						try
						{
							a = b.contents(), c = a.find("body")
						}
						catch (j)
						{}
						c && c.length && (f.css.width === d || f.css.height === d) && (e = b[0].contentWindow.document.documentElement.scrollWidth, g = Math.ceil(c.outerWidth(!0) + (i.width() - e)), h = Math.ceil(c.outerHeight(!0)), i.css(
						{
							width: f.css.width === d ? g + (i.outerWidth() - i.innerWidth()) : f.css.width,
							height: f.css.height === d ? h + (i.outerHeight() - i.innerHeight()) : f.css.height
						})), i.removeClass("fancybox-tmp")
					}
				})) : this.afterLoad(a), b.attr("src", a.src), a.opts.smallBtn && a.$content.prepend(a.opts.closeTpl), g.one("onReset", function ()
				{
					try
					{
						c(this).find("iframe").hide().attr("src", "//about:blank")
					}
					catch (a)
					{}
					c(this).empty(), a.isLoaded = !1
				})
			},
			setContent: function (a, b)
			{
				var d = this;
				d.isClosing || (d.hideLoading(a), a.$slide.empty(), j(b) && b.parent().length ? (b.data("placeholder") && b.parents(".fancybox-slide").trigger("onReset"), b.data(
				{
					placeholder: c("<div></div>").hide().insertAfter(b)
				}).css("display", "inline-block")) : ("string" === c.type(b) && (b = c("<div>").append(b).contents(), 3 === b[0].nodeType && (b = c("<div>").html(b))), a.opts.selector && (b = c("<div>").html(b).find(a.opts.selector))), a.$slide.one("onReset", function ()
				{
					var d = j(b) ? b.data("placeholder") : 0;
					d && (b.hide().replaceAll(d), b.data("placeholder", null)), a.hasError || (c(this).empty(), a.isLoaded = !1)
				}), a.$content = c(b).appendTo(a.$slide), a.opts.smallBtn === !0 && a.$content.find(".fancybox-close-small").remove().end().eq(0).append(a.opts.closeTpl), this.afterLoad(a))
			},
			setError: function (a)
			{
				a.hasError = !0, this.setContent(a, a.opts.errorTpl)
			},
			showLoading: function (a)
			{
				var b = this;
				a = a || b.current, a && !a.$spinner && (a.$spinner = c(b.opts.spinnerTpl).appendTo(a.$slide))
			},
			hideLoading: function (a)
			{
				var b = this;
				a = a || b.current, a && a.$spinner && (a.$spinner.remove(), delete a.$spinner)
			},
			afterMove: function ()
			{
				var a = this,
					b = a.current,
					d = {};
				b && (b.$slide.siblings().trigger("onReset"), c.each(a.slides, function (b, c)
				{
					c.pos >= a.currPos - 1 && c.pos <= a.currPos + 1 ? d[c.pos] = c : c && c.$slide.remove()
				}), a.slides = d, a.trigger("afterMove"), b.isLoaded && a.complete())
			},
			afterLoad: function (a)
			{
				var b = this;
				b.isClosing || (a.isLoading = !1, a.isLoaded = !0, b.trigger("afterLoad", a), b.hideLoading(a), a.$ghost || b.updateSlide(a, !0), a.index === b.currIndex && a.isMoved ? b.complete() : a.$ghost || b.revealImage(a))
			},
			complete: function ()
			{
				var a = this,
					b = a.current;
				a.revealImage(b, function ()
				{
					b.isComplete = !0, b.$slide.addClass("fancybox-slide--complete"), a.updateCursor(), a.trigger("onComplete"), b.opts.focus && "image" !== b.type && "iframe" !== b.type && a.focus()
				})
			},
			preload: function ()
			{
				var a, b, c = this;
				c.group.length < 2 || (a = c.slides[c.currPos + 1], b = c.slides[c.currPos - 1], a && "image" === a.type && c.loadSlide(a), b && "image" === b.type && c.loadSlide(b))
			},
			focus: function ()
			{
				var a, b = this.current;
				a = b && b.isComplete ? b.$slide.find('button,:input,[tabindex],a:not(".disabled")').filter(":visible:first") : null, a && a.length || (a = this.$refs.container), a.focus(), this.$refs.slider_wrap.scrollLeft(0), b && b.$slide.scrollTop(0)
			},
			activate: function ()
			{
				var a = this;
				c(".fancybox-container").each(function ()
				{
					var b = c(this).data("FancyBox");
					b && b.uid !== a.uid && !b.isClosing && b.trigger("onDeactivate")
				}), a.current && (a.$refs.container.index() > 0 && a.$refs.container.prependTo(b.body), a.updateControls()), a.trigger("onActivate"), a.addEvents()
			},
			close: function (a)
			{
				var b = this,
					d = b.current,
					e = d.opts.speed,
					f = c.proxy(function ()
					{
						b.cleanUp(a)
					}, this);
				return !b.isAnimating && !b.isClosing && void(b.trigger("beforeClose", a) !== !1 && (b.isClosing = !0, d.timouts && clearTimeout(d.timouts), a !== !0 && c.fancybox.stop(b.$refs.slider), b.$refs.container.removeClass("fancybox-container--active").addClass("fancybox-container--closing"), d.$slide.removeClass("fancybox-slide--complete").siblings().remove(), d.isMoved || d.$slide.css("overflow", "visible"), b.removeEvents(), b.hideLoading(d), b.hideControls(), b.updateCursor(), b.$refs.bg.css("transition-duration", e + "ms"), this.$refs.container.removeClass("fancybox-container--ready"), a === !0 ? setTimeout(f, e) : b.zoomInOut("Out", e, f) || c.fancybox.animate(b.$refs.container, null,
				{
					opacity: 0
				}, e, "easeInSine", f)))
			},
			cleanUp: function (a)
			{
				var b, d = this;
				d.$refs.slider.children().trigger("onReset"), d.$refs.container.empty().remove(), d.trigger("afterClose", a), d.current = null, b = c.fancybox.getInstance(), b ? b.activate() : (c("html").removeClass("fancybox-enabled"), c("#fancybox-noscroll").remove()), d.$lastFocus && d.$lastFocus.focus()
			},
			trigger: function (a, b)
			{
				var d, e = Array.prototype.slice.call(arguments, 1),
					f = this,
					g = b && b.opts ? b : f.current;
				return g ? e.unshift(g) : g = f, e.unshift(f), c.isFunction(g.opts[a]) && (d = g.opts[a].apply(g, e)), d === !1 ? d : void f.$refs.container.trigger(a + ".fb", e)
			},
			toggleControls: function (a)
			{
				this.isHiddenControls ? this.updateControls(a) : this.hideControls()
			},
			hideControls: function ()
			{
				this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-controls"), this.$refs.container.removeClass("fancybox-show-caption")
			},
			updateControls: function (a)
			{
				var b = this,
					d = b.$refs.container,
					e = b.$refs.caption,
					f = b.current,
					g = f.index,
					h = f.opts,
					i = h.caption;
				this.isHiddenControls && a !== !0 || (this.isHiddenControls = !1, b.$refs.container.addClass("fancybox-show-controls"), d.toggleClass("fancybox-show-infobar", !!h.infobar && b.group.length > 1).toggleClass("fancybox-show-buttons", !!h.buttons).toggleClass("fancybox-is-modal", !!h.modal), c(".fancybox-button--left", d).toggleClass("fancybox-button--disabled", !h.loop && 0 >= g), c(".fancybox-button--right", d).toggleClass("fancybox-button--disabled", !h.loop && g >= b.group.length - 1), c(".fancybox-button--play", d).toggle(!!(h.slideShow && b.group.length > 1)), c(".fancybox-button--close", d).toggle(!!h.closeBtn), c(".js-fancybox-count", d).html(b.group.length), c(".js-fancybox-index", d).html(g + 1), f.$slide.trigger("refresh"), e && e.empty(), i && i.length ? (e.html(i), this.$refs.container.addClass("fancybox-show-caption "), b.$caption = e) : this.$refs.container.removeClass("fancybox-show-caption"))
			}
		}), c.fancybox = {
			version: "3.0.39",
			defaults: f,
			getInstance: function (a)
			{
				var b = c('.fancybox-container:not(".fancybox-container--closing"):first').data("FancyBox"),
					d = Array.prototype.slice.call(arguments, 1);
				return b instanceof m && ("string" === c.type(a) ? b[a].apply(b, d) : "function" === c.type(a) && a.apply(b, d), b)
			},
			open: function (a, b, c)
			{
				return new m(a, b, c)
			},
			close: function (a)
			{
				var b = this.getInstance();
				b && (b.close(), a === !0 && this.close())
			},
			isTouch: b.createTouch !== d && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
			use3d: function ()
			{
				var c = b.createElement("div");
				return a.getComputedStyle(c).getPropertyValue("transform") && !(b.documentMode && b.documentMode <= 11)
			}(),
			getTranslate: function (a)
			{
				var b, c;
				return !(!a || !a.length) && (b = a.get(0).getBoundingClientRect(), c = a.eq(0).css("transform"), c && -1 !== c.indexOf("matrix") ? (c = c.split("(")[1], c = c.split(")")[0], c = c.split(",")) : c = [], c.length ? (c = c.length > 10 ? [c[13], c[12], c[0], c[5]] : [c[5], c[4], c[0], c[3]], c = c.map(parseFloat)) : c = [0, 0, 1, 1],
				{
					top: c[0],
					left: c[1],
					scaleX: c[2],
					scaleY: c[3],
					opacity: parseFloat(a.css("opacity")),
					width: b.width,
					height: b.height
				})
			},
			setTranslate: function (a, b)
			{
				var c = "",
					e = {};
				return a && b ? (b.left === d && b.top === d || (c = (b.left === d ? a.position().top : b.left) + "px, " + (b.top === d ? a.position().top : b.top) + "px", c = this.use3d ? "translate3d(" + c + ", 0px)" : "translate(" + c + ")"), b.scaleX !== d && b.scaleY !== d && (c = (c.length ? c + " " : "") + "scale(" + b.scaleX + ", " + b.scaleY + ")"), c.length && (e.transform = c), b.opacity !== d && (e.opacity = b.opacity), b.width !== d && (e.width = b.width), b.height !== d && (e.height = b.height), a.css(e)) : void 0
			},
			easing:
			{
				easeOutCubic: function (a, b, c, d)
				{
					return c * ((a = a / d - 1) * a * a + 1) + b
				},
				easeInCubic: function (a, b, c, d)
				{
					return c * (a /= d) * a * a + b
				},
				easeOutSine: function (a, b, c, d)
				{
					return c * Math.sin(a / d * (Math.PI / 2)) + b
				},
				easeInSine: function (a, b, c, d)
				{
					return -c * Math.cos(a / d * (Math.PI / 2)) + c + b
				}
			},
			stop: function (a)
			{
				a.removeData("animateID")
			},
			animate: function (a, b, e, f, g, h)
			{
				var i, j, l, m = this,
					n = null,
					o = 0,
					p = function ()
					{
						e.scaleX !== d && e.scaleY !== d && b && b.width !== d && b.height !== d && (e.width = b.width * e.scaleX, e.height = b.height * e.scaleY, e.scaleX = 1, e.scaleY = 1), m.setTranslate(a, e), h()
					},
					q = function (c)
					{
						if (i = [], j = 0, a.length && a.data("animateID") === l)
						{
							if (c = c || Date.now(), n && (j = c - n), n = c, o += j, o >= f) return void p();
							for (var h in e) e.hasOwnProperty(h) && b[h] !== d && (b[h] == e[h] ? i[h] = e[h] : i[h] = m.easing[g](o, b[h], e[h] - b[h], f));
							m.setTranslate(a, i), k(q)
						}
					};
				m.animateID = l = m.animateID === d ? 1 : m.animateID + 1, a.data("animateID", l), h === d && "function" == c.type(g) && (h = g, g = d), g || (g = "easeOutCubic"), h = h || c.noop, b ? this.setTranslate(a, b) : b = this.getTranslate(a), f ? (a.show(), k(q)) : p()
			}
		}, c.fn.fancybox = function (a)
		{
			return this.off("click.fb-start").on("click.fb-start",
			{
				items: this,
				options: a ||
				{}
			}, e), this
		}, c(b).on("click.fb-start", "[data-fancybox]", e)
	}(window, document, window.jQuery),
	function (a)
	{
		"use strict";
		var b = function (b, c, d)
			{
				return b ? (d = d || "", "object" === a.type(d) && (d = a.param(d, !0)), a.each(c, function (a, c)
				{
					b = b.replace("$" + a, c || "")
				}), d.length && (b += (b.indexOf("?") > 0 ? "&" : "?") + d), b) : void 0
			},
			c = {
				youtube:
				{
					matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
					params:
					{
						autoplay: 1,
						autohide: 1,
						fs: 1,
						rel: 0,
						hd: 1,
						wmode: "transparent",
						enablejsapi: 1,
						html5: 1
					},
					paramPlace: 8,
					type: "iframe",
					url: "//www.youtube.com/embed/$4",
					thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
				},
				vimeo:
				{
					matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
					params:
					{
						autoplay: 1,
						hd: 1,
						show_title: 1,
						show_byline: 1,
						show_portrait: 0,
						fullscreen: 1,
						api: 1
					},
					paramPlace: 3,
					type: "iframe",
					url: "//player.vimeo.com/video/$2"
				},
				metacafe:
				{
					matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
					type: "iframe",
					url: "//www.metacafe.com/embed/$1/?ap=1"
				},
				dailymotion:
				{
					matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
					params:
					{
						additionalInfos: 0,
						autoStart: 1
					},
					type: "iframe",
					url: "//www.dailymotion.com/embed/video/$1"
				},
				vine:
				{
					matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
					type: "iframe",
					url: "//vine.co/v/$1/embed/simple"
				},
				instagram:
				{
					matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
					type: "image",
					url: "//$1/p/$2/media/?size=l"
				},
				google_maps:
				{
					matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
					type: "iframe",
					url: function (a)
					{
						return "//maps.google." + a[2] + "/?ll=" + (a[9] ? a[9] + "&z=" + Math.floor(a[10]) + (a[12] ? a[12].replace(/^\//, "&") : "") : a[12]) + "&output=" + (a[12] && a[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
					}
				}
			};
		a(document).on("onInit.fb", function (d, e)
		{
			a.each(e.group, function (d, e)
			{
				var f, g, h, i, j, k, l = e.src || "",
					m = !1;
				e.type || (a.each(c, function (c, d)
				{
					if (g = l.match(d.matcher), j = {}, k = c, g)
					{
						if (m = d.type, d.paramPlace && g[d.paramPlace])
						{
							i = g[d.paramPlace], "?" == i[0] && (i = i.substring(1)), i = i.split("&");
							for (var n = 0; n < i.length; ++n)
							{
								var o = i[n].split("=", 2);
								2 == o.length && (j[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")))
							}
						}
						return h = a.extend(!0,
						{}, d.params, e.opts[c], j), l = "function" === a.type(d.url) ? d.url.call(this, g, h, e) : b(d.url, g, h), f = "function" === a.type(d.thumb) ? d.thumb.call(this, g, h, e) : b(d.thumb, g), "vimeo" === k && (l = l.replace("&%23", "#")), !1
					}
				}), m ? (e.src = l, e.type = m, e.opts.thumb || e.opts.$thumb && e.opts.$thumb.length || (e.opts.thumb = f), "iframe" === m && (a.extend(!0, e.opts,
				{
					iframe:
					{
						preload: !1,
						scrolling: "no"
					},
					smallBtn: !1,
					closeBtn: !0,
					fullScreen: !1,
					slideShow: !1
				}), e.opts.slideClass += " fancybox-slide--video")) : e.type = "iframe")
			})
		})
	}(window.jQuery),
	function (a, b, c)
	{
		"use strict";
		var d = function ()
			{
				return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || function (b)
				{
					a.setTimeout(b, 1e3 / 60)
				}
			}(),
			e = function (b)
			{
				var c = [];
				b = b.originalEvent || b || a.e, b = b.touches && b.touches.length ? b.touches : b.changedTouches && b.changedTouches.length ? b.changedTouches : [b];
				for (var d in b) b[d].pageX ? c.push(
				{
					x: b[d].pageX,
					y: b[d].pageY
				}) : b[d].clientX && c.push(
				{
					x: b[d].clientX,
					y: b[d].clientY
				});
				return c
			},
			f = function (a, b, c)
			{
				return b && a ? "x" === c ? a.x - b.x : "y" === c ? a.y - b.y : Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)) : 0
			},
			g = function (a)
			{
				return a.is("a") || a.is("button") || a.is("input") || a.is("select") || a.is("textarea") || c.isFunction(a.get(0).onclick)
			},
			h = function (b)
			{
				var c = a.getComputedStyle(b)["overflow-y"],
					d = a.getComputedStyle(b)["overflow-x"],
					e = ("scroll" === c || "auto" === c) && b.scrollHeight > b.clientHeight,
					f = ("scroll" === d || "auto" === d) && b.scrollWidth > b.clientWidth;
				return e || f
			},
			i = function (a)
			{
				for (var b = !1; !(b = h(a.get(0))) && (a = a.parent(), a.length && !a.hasClass("fancybox-slider") && !a.is("body")););
				return b
			},
			j = function (a)
			{
				var b = this;
				b.instance = a, b.$wrap = a.$refs.slider_wrap, b.$slider = a.$refs.slider, b.$container = a.$refs.container, b.destroy(), b.$wrap.on("touchstart.fb mousedown.fb", c.proxy(b, "ontouchstart"))
			};
		j.prototype.destroy = function ()
		{
			this.$wrap.off("touchstart.fb mousedown.fb touchmove.fb mousemove.fb touchend.fb touchcancel.fb mouseup.fb mouseleave.fb")
		}, j.prototype.ontouchstart = function (b)
		{
			var d = this,
				h = c(b.target),
				j = d.instance,
				k = j.current,
				l = k.$content || k.$placeholder;
			return d.startPoints = e(b), d.$target = h, d.$content = l, d.canvasWidth = Math.round(k.$slide[0].clientWidth), d.canvasHeight = Math.round(k.$slide[0].clientHeight), d.startEvent = b, b.originalEvent.clientX > d.canvasWidth || (k.opts.touch ? void(g(h) || g(h.parent()) || i(h) && !h.hasClass("fancybox-slide") || b.originalEvent && 2 == b.originalEvent.button || (b.stopPropagation(), b.preventDefault(), !k || d.instance.isAnimating || d.instance.isClosing || !d.startPoints || d.startPoints.length > 1 && !k.isMoved || (d.$wrap.off("touchmove.fb mousemove.fb", c.proxy(d, "ontouchmove")), d.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", c.proxy(d, "ontouchend")), d.$wrap.on("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", c.proxy(d, "ontouchend")), d.$wrap.on("touchmove.fb mousemove.fb", c.proxy(d, "ontouchmove")), d.startTime = (new Date).getTime(), d.distanceX = d.distanceY = d.distance = 0, d.canTap = !1, d.isPanning = !1, d.isSwiping = !1, d.isZooming = !1, d.sliderStartPos = c.fancybox.getTranslate(d.$slider), d.contentStartPos = c.fancybox.getTranslate(d.$content), d.contentLastPos = null, 1 !== d.startPoints.length || d.isZooming || (d.canTap = k.isMoved, "image" === k.type && (d.contentStartPos.width > d.canvasWidth + 1 || d.contentStartPos.height > d.canvasHeight + 1) ? (c.fancybox.stop(d.$content), d.isPanning = !0) : (c.fancybox.stop(d.$slider), d.isSwiping = !0), d.$container.addClass("fancybox-controls--isGrabbing")), 2 === d.startPoints.length && k.isMoved && !k.hasError && "image" === k.type && (k.isLoaded || k.$ghost) && (d.isZooming = !0, d.isSwiping = !1, d.isPanning = !1, c.fancybox.stop(d.$content), d.centerPointStartX = .5 * (d.startPoints[0].x + d.startPoints[1].x) - c(a).scrollLeft(), d.centerPointStartY = .5 * (d.startPoints[0].y + d.startPoints[1].y) - c(a).scrollTop(), d.percentageOfImageAtPinchPointX = (d.centerPointStartX - d.contentStartPos.left) / d.contentStartPos.width, d.percentageOfImageAtPinchPointY = (d.centerPointStartY - d.contentStartPos.top) / d.contentStartPos.height, d.startDistanceBetweenFingers = f(d.startPoints[0], d.startPoints[1]))))) : (d.endPoints = d.startPoints, d.ontap()))
		}, j.prototype.ontouchmove = function (a)
		{
			var b = this;
			a.preventDefault(), b.newPoints = e(a), b.newPoints && b.newPoints.length && (b.distanceX = f(b.newPoints[0], b.startPoints[0], "x"), b.distanceY = f(b.newPoints[0], b.startPoints[0], "y"), b.distance = f(b.newPoints[0], b.startPoints[0]), b.distance > 0 && (b.isSwiping ? b.onSwipe() : b.isPanning ? b.onPan() : b.isZooming && b.onZoom()))
		}, j.prototype.onSwipe = function ()
		{
			var b, e = this,
				f = e.isSwiping,
				g = e.sliderStartPos.left;
			f === !0 ? Math.abs(e.distance) > 10 && (e.instance.group.length < 2 ? e.isSwiping = "y" : !e.instance.current.isMoved || e.instance.opts.touch.vertical === !1 || "auto" === e.instance.opts.touch.vertical && c(a).width() > 800 ? e.isSwiping = "x" : (b = Math.abs(180 * Math.atan2(e.distanceY, e.distanceX) / Math.PI), e.isSwiping = b > 45 && 135 > b ? "y" : "x"), e.canTap = !1, e.instance.current.isMoved = !1, e.startPoints = e.newPoints) : ("x" == f && (!e.instance.current.opts.loop && 0 === e.instance.current.index && e.distanceX > 0 ? g += Math.pow(e.distanceX, .8) : !e.instance.current.opts.loop && e.instance.current.index === e.instance.group.length - 1 && e.distanceX < 0 ? g -= Math.pow(-e.distanceX, .8) : g += e.distanceX), e.sliderLastPos = {
				top: "x" == f ? 0 : e.sliderStartPos.top + e.distanceY,
				left: g
			}, d(function ()
			{
				c.fancybox.setTranslate(e.$slider, e.sliderLastPos)
			}))
		}, j.prototype.onPan = function ()
		{
			var a, b, e, f = this;
			f.canTap = !1, a = f.contentStartPos.width > f.canvasWidth ? f.contentStartPos.left + f.distanceX : f.contentStartPos.left, b = f.contentStartPos.top + f.distanceY, e = f.limitMovement(a, b, f.contentStartPos.width, f.contentStartPos.height), e.scaleX = f.contentStartPos.scaleX, e.scaleY = f.contentStartPos.scaleY, f.contentLastPos = e, d(function ()
			{
				c.fancybox.setTranslate(f.$content, f.contentLastPos)
			})
		}, j.prototype.limitMovement = function (a, b, c, d)
		{
			var e, f, g, h, i = this,
				j = i.canvasWidth,
				k = i.canvasHeight,
				l = i.contentStartPos.left,
				m = i.contentStartPos.top,
				n = i.distanceX,
				o = i.distanceY;
			return e = Math.max(0, .5 * j - .5 * c), f = Math.max(0, .5 * k - .5 * d), g = Math.min(j - c, .5 * j - .5 * c), h = Math.min(k - d, .5 * k - .5 * d), c > j && (n > 0 && a > e && (a = e - 1 + Math.pow(-e + l + n, .8) || 0), 0 > n && g > a && (a = g + 1 - Math.pow(g - l - n, .8) || 0)), d > k && (o > 0 && b > f && (b = f - 1 + Math.pow(-f + m + o, .8) || 0), 0 > o && h > b && (b = h + 1 - Math.pow(h - m - o, .8) || 0)),
			{
				top: b,
				left: a
			}
		}, j.prototype.limitPosition = function (a, b, c, d)
		{
			var e = this,
				f = e.canvasWidth,
				g = e.canvasHeight;
			return c > f ? (a = a > 0 ? 0 : a, a = f - c > a ? f - c : a) : a = Math.max(0, f / 2 - c / 2), d > g ? (b = b > 0 ? 0 : b, b = g - d > b ? g - d : b) : b = Math.max(0, g / 2 - d / 2),
			{
				top: b,
				left: a
			}
		}, j.prototype.onZoom = function ()
		{
			var b = this,
				e = b.contentStartPos.width,
				g = b.contentStartPos.height,
				h = b.contentStartPos.left,
				i = b.contentStartPos.top,
				j = f(b.newPoints[0], b.newPoints[1]),
				k = j / b.startDistanceBetweenFingers,
				l = Math.floor(e * k),
				m = Math.floor(g * k),
				n = (e - l) * b.percentageOfImageAtPinchPointX,
				o = (g - m) * b.percentageOfImageAtPinchPointY,
				p = (b.newPoints[0].x + b.newPoints[1].x) / 2 - c(a).scrollLeft(),
				q = (b.newPoints[0].y + b.newPoints[1].y) / 2 - c(a).scrollTop(),
				r = p - b.centerPointStartX,
				s = q - b.centerPointStartY,
				t = h + (n + r),
				u = i + (o + s),
				v = {
					top: u,
					left: t,
					scaleX: b.contentStartPos.scaleX * k,
					scaleY: b.contentStartPos.scaleY * k
				};
			b.canTap = !1, b.newWidth = l, b.newHeight = m, b.contentLastPos = v, d(function ()
			{
				c.fancybox.setTranslate(b.$content, b.contentLastPos)
			})
		}, j.prototype.ontouchend = function (a)
		{
			var b = this,
				d = b.instance.current,
				f = Math.max((new Date).getTime() - b.startTime, 1),
				g = b.isSwiping,
				h = b.isPanning,
				i = b.isZooming;
			return b.endPoints = e(a), b.$container.removeClass("fancybox-controls--isGrabbing"), b.$wrap.off("touchmove.fb mousemove.fb", c.proxy(this, "ontouchmove")), b.$wrap.off("touchend.fb touchcancel.fb mouseup.fb mouseleave.fb", c.proxy(this, "ontouchend")), b.isSwiping = !1, b.isPanning = !1, b.isZooming = !1, b.canTap ? b.ontap() : (b.velocityX = b.distanceX / f * .5, b.velocityY = b.distanceY / f * .5, b.speed = d.opts.speed || 330, b.speedX = Math.max(.75 * b.speed, Math.min(1.5 * b.speed, 1 / Math.abs(b.velocityX) * b.speed)), b.speedY = Math.max(.75 * b.speed, Math.min(1.5 * b.speed, 1 / Math.abs(b.velocityY) * b.speed)), void(h ? b.endPanning() : i ? b.endZooming() : b.endSwiping(g)))
		}, j.prototype.endSwiping = function (a)
		{
			var b = this;
			"y" == a && Math.abs(b.distanceY) > 50 ? (c.fancybox.animate(b.$slider, null,
			{
				top: b.sliderStartPos.top + b.distanceY + 150 * b.velocityY,
				left: b.sliderStartPos.left,
				opacity: 0
			}, b.speedY), b.instance.close(!0)) : "x" == a && b.distanceX > 50 ? b.instance.previous(b.speedX) : "x" == a && b.distanceX < -50 ? b.instance.next(b.speedX) : b.instance.update(!1, !0, 150)
		}, j.prototype.endPanning = function ()
		{
			var a, b, d, e = this;
			e.contentLastPos && (a = e.contentLastPos.left + e.velocityX * e.speed * 2, b = e.contentLastPos.top + e.velocityY * e.speed * 2, d = e.limitPosition(a, b, e.contentStartPos.width, e.contentStartPos.height), d.width = e.contentStartPos.width, d.height = e.contentStartPos.height, c.fancybox.animate(e.$content, null, d, e.speed, "easeOutSine"))
		}, j.prototype.endZooming = function ()
		{
			var a, b, d, e, f = this,
				g = f.instance.current,
				h = f.newWidth,
				i = f.newHeight;
			f.contentLastPos && (a = f.contentLastPos.left, b = f.contentLastPos.top, e = {
				top: b,
				left: a,
				width: h,
				height: i,
				scaleX: 1,
				scaleY: 1
			}, c.fancybox.setTranslate(f.$content, e), h < f.canvasWidth && i < f.canvasHeight ? f.instance.scaleToFit(150) : h > g.width || i > g.height ? f.instance.scaleToActual(f.centerPointStartX, f.centerPointStartY, 150) : (d = f.limitPosition(a, b, h, i), c.fancybox.animate(f.$content, null, d, f.speed, "easeOutSine")))
		}, j.prototype.ontap = function ()
		{
			var a = this,
				b = a.instance,
				d = b.current,
				e = a.endPoints[0].x,
				f = a.endPoints[0].y;
			if (e -= a.$wrap.offset().left, f -= a.$wrap.offset().top, b.SlideShow && b.SlideShow.isActive && b.SlideShow.stop(), !c.fancybox.isTouch) return d.opts.closeClickOutside && a.$target.is(".fancybox-slide") ? void b.close(a.startEvent) : void("image" == d.type && d.isMoved && (b.canPan() ? b.scaleToFit() : b.isScaledDown() ? b.scaleToActual(e, f) : b.group.length < 2 && b.close(a.startEvent)));
			if (a.tapped)
			{
				if (clearTimeout(a.tapped), a.tapped = null, Math.abs(e - a.x) > 50 || Math.abs(f - a.y) > 50 || !d.isMoved) return this;
				"image" == d.type && (d.isLoaded || d.$ghost) && (b.canPan() ? b.scaleToFit() : b.isScaledDown() && b.scaleToActual(e, f))
			}
			else a.x = e, a.y = f, a.tapped = setTimeout(function ()
			{
				a.tapped = null, b.toggleControls(!0)
			}, 300);
			return this
		}, c(b).on("onActivate.fb", function (a, b)
		{
			b.Guestures || (b.Guestures = new j(b))
		}), c(b).on("beforeClose.fb", function (a, b)
		{
			b.Guestures && b.Guestures.destroy()
		})
	}(window, document, window.jQuery),
	function (a, b)
	{
		"use strict";
		var c = function (a)
		{
			this.instance = a, this.init()
		};
		b.extend(c.prototype,
		{
			timer: null,
			isActive: !1,
			$button: null,
			speed: 3e3,
			init: function ()
			{
				var a = this;
				a.$button = b('<button data-fancybox-play class="fancybox-button fancybox-button--play" title="Slideshow (P)"></button>').appendTo(a.instance.$refs.buttons), a.instance.$refs.container.on("click", "[data-fancybox-play]", function ()
				{
					a.toggle()
				})
			},
			set: function ()
			{
				var a = this;
				a.instance && a.instance.current && (a.instance.current.opts.loop || a.instance.currIndex < a.instance.group.length - 1) ? a.timer = setTimeout(function ()
				{
					a.instance.next()
				}, a.instance.current.opts.slideShow.speed || a.speed) : a.stop()
			},
			clear: function ()
			{
				var a = this;
				clearTimeout(a.timer), a.timer = null
			},
			start: function ()
			{
				var a = this;
				a.stop(), a.instance && a.instance.current && (a.instance.current.opts.loop || a.instance.currIndex < a.instance.group.length - 1) && (a.instance.$refs.container.on(
				{
					"beforeLoad.fb.player": b.proxy(a, "clear"),
					"onComplete.fb.player": b.proxy(a, "set")
				}), a.isActive = !0, a.instance.current.isComplete && a.set(), a.instance.$refs.container.trigger("onPlayStart"), a.$button.addClass("fancybox-button--pause"))
			},
			stop: function ()
			{
				var a = this;
				a.clear(), a.instance.$refs.container.trigger("onPlayEnd").off(".player"), a.$button.removeClass("fancybox-button--pause"), a.isActive = !1
			},
			toggle: function ()
			{
				var a = this;
				a.isActive ? a.stop() : a.start()
			}
		}), b(a).on("onInit.fb", function (a, b)
		{
			b.opts.slideShow && !b.SlideShow && b.group.length > 1 && (b.SlideShow = new c(b))
		}), b(a).on("beforeClose.fb onDeactivate.fb", function (a, b)
		{
			b.SlideShow && b.SlideShow.stop()
		})
	}(document, window.jQuery),
	function (a, b)
	{
		"use strict";
		var c = function (a)
		{
			this.instance = a, this.init()
		};
		b.extend(c.prototype,
		{
			$button: null,
			init: function ()
			{
				var c = this;
				c.isAvailable() && (c.$button = b('<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="Full screen (F)"></button>').appendTo(c.instance.$refs.buttons), c.instance.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (a)
				{
					a.stopPropagation(), a.preventDefault(), c.toggle()
				}), b(a).on("onUpdate.fb", function (a, b)
				{
					c.$button.toggle(!!b.current.opts.fullScreen), c.$button.toggleClass("fancybox-button-shrink", c.isActivated())
				}), b(a).on("afterClose.fb", function ()
				{
					c.exit()
				}))
			},
			isAvailable: function ()
			{
				var a = this.instance.$refs.container.get(0);
				return !!(a.requestFullscreen || a.msRequestFullscreen || a.mozRequestFullScreen || a.webkitRequestFullscreen)
			},
			isActivated: function ()
			{
				return !!(a.fullscreenElement || a.mozFullScreenElement || a.webkitFullscreenElement || a.msFullscreenElement)
			},
			launch: function ()
			{
				var a = this.instance.$refs.container.get(0);
				a && !this.instance.isClosing && (a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen(a.ALLOW_KEYBOARD_INPUT))
			},
			exit: function ()
			{
				a.exitFullscreen ? a.exitFullscreen() : a.msExitFullscreen ? a.msExitFullscreen() : a.mozCancelFullScreen ? a.mozCancelFullScreen() : a.webkitExitFullscreen && a.webkitExitFullscreen()
			},
			toggle: function ()
			{
				this.isActivated() ? this.exit() : this.isAvailable() && this.launch()
			}
		}), b(a).on("onInit.fb", function (a, b)
		{
			b.opts.fullScreen && !b.FullScreen && (b.FullScreen = new c(b))
		})
	}(document, window.jQuery),
	function (a, b)
	{
		"use strict";
		var c = function (a)
		{
			this.instance = a, this.init()
		};
		b.extend(c.prototype,
		{
			$button: null,
			$grid: null,
			$list: null,
			isVisible: !1,
			init: function ()
			{
				var a = this;
				a.$button = b('<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="Thumbnails (G)"></button>').appendTo(this.instance.$refs.buttons).on("touchend click", function (b)
				{
					b.stopPropagation(), b.preventDefault(), a.toggle()
				})
			},
			create: function ()
			{
				var a, c, d = this.instance;
				this.$grid = b('<div class="fancybox-thumbs"></div>').appendTo(d.$refs.container), a = "<ul>", b.each(d.group, function (b, d)
				{
					c = d.opts.thumb || (d.opts.$thumb ? d.opts.$thumb.attr("src") : null), c || "image" !== d.type || (c = d.src), c && c.length && (a += '<li data-index="' + b + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + c + '" /></li>')
				}), a += "</ul>", this.$list = b(a).appendTo(this.$grid).on("click touchstart", "li", function ()
				{
					d.jumpTo(b(this).data("index"))
				}), this.$list.find("img").hide().one("load", function ()
				{
					var a, c, d, e, f = b(this).parent().removeClass("fancybox-thumbs-loading"),
						g = f.outerWidth(),
						h = f.outerHeight();
					a = this.naturalWidth || this.width, c = this.naturalHeight || this.height, d = a / g, e = c / h, d >= 1 && e >= 1 && (d > e ? (a /= e, c = h) : (a = g, c /= d)), b(this).css(
					{
						width: Math.floor(a),
						height: Math.floor(c),
						"margin-top": Math.min(0, Math.floor(.3 * h - .3 * c)),
						"margin-left": Math.min(0, Math.floor(.5 * g - .5 * a))
					}).show()
				}).each(function ()
				{
					this.src = b(this).data("src")
				})
			},
			focus: function ()
			{
				this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
			},
			close: function ()
			{
				this.$grid.hide()
			},
			update: function ()
			{
				this.instance.$refs.container.toggleClass("fancybox-container--thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.$grid.show(), this.focus()) : this.$grid && this.$grid.hide(), this.instance.update()
			},
			hide: function ()
			{
				this.isVisible = !1, this.update()
			},
			show: function ()
			{
				this.isVisible = !0, this.update()
			},
			toggle: function ()
			{
				this.isVisible ? this.hide() : this.show()
			}
		}), b(a).on("onInit.fb", function (a, b)
		{
			var d = b.group[0],
				e = b.group[1];
			b.opts.thumbs && !b.Thumbs && b.group.length > 1 && ("image" == d.type || d.opts.thumb || d.opts.$thumb) && ("image" == e.type || e.opts.thumb || e.opts.$thumb) && (b.Thumbs = new c(b))
		}), b(a).on("beforeMove.fb", function (a, b, c)
		{
			var d = b.Thumbs;
			d && (c.modal ? (d.$button.hide(), d.hide()) : (b.opts.thumbs.showOnStart === !0 && b.firstRun && d.show(), d.$button.show(), d.isVisible && d.focus()))
		}), b(a).on("beforeClose.fb", function (a, b)
		{
			b.Thumbs && b.Thumbs.isVisible && b.opts.thumbs.hideOnClosing !== !1 && b.Thumbs.close(), b.Thumbs = null
		})
	}(document, window.jQuery), "document" in self && !("classList" in document.createElement("_") && "classList" in document.createElementNS("http://www.w3.org/2000/svg", "svg")) && ! function (a)
	{
		"use strict";
		if ("Element" in a)
		{
			var b = "classList",
				c = "prototype",
				d = a.Element[c],
				e = Object,
				f = String[c].trim || function ()
				{
					return this.replace(/^\s+|\s+$/g, "")
				},
				g = Array[c].indexOf || function (a)
				{
					for (var b = 0, c = this.length; c > b; b++)
						if (b in this && this[b] === a) return b;
					return -1
				},
				h = function (a, b)
				{
					this.name = a, this.code = DOMException[a], this.message = b
				},
				i = function (a, b)
				{
					if ("" === b) throw new h("SYNTAX_ERR", "An invalid or illegal string was specified");
					if (/\s/.test(b)) throw new h("INVALID_CHARACTER_ERR", "String contains an invalid character");
					return g.call(a, b)
				},
				j = function (a)
				{
					for (var b = f.call(a.getAttribute("class") || ""), c = b ? b.split(/\s+/) : [], d = 0, e = c.length; e > d; d++) this.push(c[d]);
					this._updateClassName = function ()
					{
						a.setAttribute("class", this.toString())
					}
				},
				k = j[c] = [],
				l = function ()
				{
					return new j(this)
				};
			if (h[c] = Error[c], k.item = function (a)
				{
					return this[a] || null
				}, k.contains = function (a)
				{
					return a += "", -1 !== i(this, a)
				}, k.add = function ()
				{
					var a, b = arguments,
						c = 0,
						d = b.length,
						e = !1;
					do a = b[c] + "", -1 === i(this, a) && (this.push(a), e = !0); while (++c < d);
					e && this._updateClassName()
				}, k.remove = function ()
				{
					var a, b = arguments,
						c = 0,
						d = b.length,
						e = !1;
					do {
						a = b[c] + "";
						var f = i(this, a); - 1 !== f && (this.splice(f, 1), e = !0)
					} while (++c < d);
					e && this._updateClassName()
				}, k.toggle = function (a, b)
				{
					a += "";
					var c = this.contains(a),
						d = c ? b !== !0 && "remove" : b !== !1 && "add";
					return d && this[d](a), !c
				}, k.toString = function ()
				{
					return this.join(" ")
				}, e.defineProperty)
			{
				var m = {
					get: l,
					enumerable: !0,
					configurable: !0
				};
				try
				{
					e.defineProperty(d, b, m)
				}
				catch (n)
				{
					-2146823252 === n.number && (m.enumerable = !1, e.defineProperty(d, b, m))
				}
			}
			else e[c].__defineGetter__ && d.__defineGetter__(b, l)
		}
	}(self), "undefined" == typeof console && (console = {}, console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = function () {});
var byId = function (a)
	{
		return document.getElementById(a)
	},
	byTag = function (a)
	{
		return document.getElementsByTagName(a)
	},
	byClass = function (a)
	{
		return document.getElementsByClassName(a)
	},
	getDeviceState = function ()
	{
		var a = document.createElement("div");
		return a.className = "resolution-indicator", document.body.appendChild(a), parseInt(window.getComputedStyle(a).getPropertyValue("z-index"), 10)
	},
	getDocumentHeight = function ()
	{
		var a = document;
		return Math.max(a.body.scrollHeight, a.documentElement.scrollHeight, a.body.offsetHeight, a.documentElement.offsetHeight, a.body.clientHeight, a.documentElement.clientHeight)
	};
$(function ()
{
	var a;
	new(a = Class.extend(
	{
		method: null,
		init: function ()
		{
			var a = this;
			return a.popup(), a.scrollToAnchor(), a.placeholderSimulation(), a.newsletterValidation(), "undefined" != typeof o && "function" == typeof a[o.method] ? a[o.method]() : void 0
		},
		portfolio: function ()
		{
			var a = this;
			a.hookNavigation(), a.unfixedHeaderByWindowHeight()
		},
		who_are_we: function ()
		{
			var a = this;
			a.hideFixedHeader(400, 100), a.teammateInfoOpen(), a.hookNavigation(), a.unfixedHeaderByWindowHeight()
		},
		services: function ()
		{
			var a = this;
			a.hookNavigation(), a.unfixedHeaderByWindowHeight();
			var b = byClass("col-services-line");
			for (i in b) !isNaN(i) && b.hasOwnProperty(i) && (b[i].addEventListener("mouseenter", function (a)
			{
				a.currentTarget.classList.add("current")
			}, !1), b[i].addEventListener("mouseleave", function (a)
			{
				a.currentTarget.classList.remove("current")
			}, !1))
		},
		contact: function ()
		{
			var a = this;
			o.isMobile || a.hideFixedHeader(800, 200), a.hookNavigation(), a.nextStepContactForm(), a.contactFormValueSwitching(), a.unfixedHeaderByWindowHeight(), a.hidePhoneFieldContact(), $(".contact select").fancySelect(
			{
				forceiOS: !0
			})
		},
		anim: function ()
		{
			function a()
			{
				var a = 1,
					b = setInterval(function ()
					{
						1 != a && $(".intro .frame" + (a - 1)).hide(), $(".intro .frame" + a).show(), 9 == a ? (clearInterval(b), setTimeout(function ()
						{
							$(".intro").fadeOut()
						}, 1e3)) : a++
					}, 350)
			}
			setTimeout(a, 1e3)
		},
		notfound: function ()
		{
			var a = this;
			a.hookNavigation()
		},
		popup: function ()
		{
			var a = this;
			a.nextStepPopupForm(), a.popupFormValueSwitching(), a.hidePhoneFieldPopup(), $(".popup select").fancySelect(
			{
				forceiOS: !0
			})
		},
		blog: function ()
		{
			var a = this,
				b = (byTag("html")[0], byId("container"), "category-menu-opened");
			byId("btn-cat-open");
			a.newsletterValidation(), a.infiniteScroll(), $("button#btn-cat-open").on("click", function (a)
			{
				$("html").toggleClass(b)
			}), $(".block-category .icon-close").on("click", function (a)
			{
				$("html").toggleClass(b)
			})
		},
		newsletterproperties: function ()
		{
			$(".landing select").fancySelect(
			{
				forceiOS: !0
			})
		},
		landingppc: function ()
		{
			var a = this;
			a.nextStepContactForm(), a.popupFormValueSwitching(), a.hookNavigation(), contactGoal = $("#contact-form .contact_goal"), contactMethod = $("#contact-form #contact-method"), $("select").fancySelect(
			{
				forceiOS: !0
			}), $(".col-landing-contact").mouseenter(function ()
			{
				$(this).addClass("open")
			}), $(".col-landing-contact").mouseleave(function ()
			{
				$(this).removeClass("open")
			}), $("#contact-form").submit(function (b)
			{
				var c = a.contactFormValidation();
				return c && (_gaq.push(["_setCustomVar", 1, "Select_Service", contactGoal.val(), 3]), _gaq.push(["_setCustomVar", 1, "Select_Chanel", contactMethod.val(), 3]), $(".contact-form").slideUp(), $(".thankyou-message-form").slideDown(), a.submitLandingForm()), b.preventDefault(), !1
			})
		},
		single: function ()
		{
			var a = this;
			a.hookNavigation();
			var b = window.location.hash.substr(1);
			if (a.openShareSocialMenu(), "" !== b)
			{
				var c = $("[id=" + b + "]");
				return $("html,body").animate(
				{
					scrollTop: c.offset().top - 125
				}, 1e3), !1
			}
		},
		openShareSocialMenu: function ()
		{
			$(".open-share").click(function ()
			{
				$(".col-share").fadeIn()
			}), $(".col-share").click(function (a)
			{
				$(a.target).is("a") || $(".col-share").fadeOut()
			})
		},
		hookNavigation: function ()
		{
			var a = byId("btn-nav-open"),
				b = byId("btn-nav-close"),
				c = byId("btn-intro-close"),
				d = byId("btn-popup-close"),
				e = byId("cont-nav"),
				f = byId("cont-intro"),
				g = byId("cont-popup"),
				h = byId("nav");
			a.addEventListener("click", function (a)
			{
				h.classList.add("navigation-open"), e.style.display = "block"
			}, !1), b.addEventListener("click", function (a)
			{
				h.classList.remove("navigation-open"), e.style.display = "none"
			}, !1), c && c.addEventListener("click", function (a)
			{
				f.style.display = "none"
			}, !1), d && d.addEventListener("click", function (a)
			{
				g.style.display = "none"
			}, !1), o.menuOpened && (h.classList.add("navigation-open"), e.style.display = "block")
		},
		hideFixedHeader: function (a, b)
		{
			if (currentDeviceState = getDeviceState(), currentDeviceState > 1)
			{
				var c = $(".col-fixed-header"),
					d = window.scrollY;
				d > a && c.hide(), $(window).scroll(function (d)
				{
					var e = $("#container");
					$(".header-category");
					distanceFromTop = a - (e[0].offsetTop - window.pageYOffset), distanceFromTop > b && 1 != $("body").hasClass("unfixed-header") ? c.fadeOut() : c.fadeIn()
				})
			}
		},
		scrollToAnchor: function ()
		{
			$("a[href^='#']").click(function ()
			{
				return $("html, body").animate(
				{
					scrollTop: $($(this).attr("href")).scrollTop()
				}, "slow"), !1
			})
		},
		contactFormValueSwitching: function ()
		{
			var a = $(".contact #contact-method"),
				b = $(".contact #type-email"),
				c = $(".contact #type-phone");
			a.change(function ()
			{
				"phone" == a.val() ? (c.show(), b.hide()) : (b.show(), c.hide())
			})
		},
		googleTrackConversion: function (a, b)
		{
			var c = new Image(1, 1);
			c.src = "http://www.googleadservices.com/pagead/conversion/" + a + "/?label=" + b + "&script=0"
		},
		nextStepContactForm: function ()
		{
			var a = this;
			$(".contact #leave-message").click(function (b)
			{
				var c = $(".contact #contact-form .step-1"),
					d = $(".contact #contact-form .step-2"),
					e = a.contactFormValidation();
				return e && ("en" == o.language ? _gaq.push(["_trackPageview", "/contact/leave-message"]) : _gaq.push(["_trackPageview", "/contact/laisser-un-message"]), _gaq.push(["_trackEvent", "Lead", "Interested_Form", "Contact_Site_Started"]), c.hide(), d.show()), a.submitContactForm(), b.preventDefault(), !1
			})
		},
		contactFormValidation: function ()
		{
			var a = $(".contact input, .contact select, .contact textarea"),
				b = ($(".contact #contact-form button"), $(".contact #contact-form #name")),
				c = ($(".contact #contact-form #contact-goal"), $(".contact #contact-form #contact-method")),
				d = $(".contact #contact-form #type-email"),
				e = $(".contact #contact-form #type-phone"),
				f = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
				g = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
			a.focus(function ()
			{
				$(this).removeClass("error")
			});
			var h = !1;
			return b.val() && b.val() != b.attr("placeholder") || (b.addClass("error"), h = !0), "phone" == c.val() ? 0 == g.test(e.val()) ? (e.addClass("error"), h = !0) : d.val("") : 0 == f.test(d.val()) ? (d.addClass("error"), h = !0) : e.val(""), h ? !1 : !0
		},
		submitContactForm: function ()
		{
			var a = this,
				b = $(".contact #contact-form"),
				c = $(".contact #contact-form #message"),
				d = $(".contact .thankyou-message-form"),
				e = $(".contact #contact-goal");
			b.submit(function (f)
			{
				var g = !1;
				if (console.log(b.serialize()), c.val() && c.val() != c.attr("placeholder") || (c.addClass("error"), g = !0), !g)
				{
					var h = b.serialize();
					b.contact_goal, _gaq.push(["_setCustomVar", 1, "Contact form ID", e.val(), 3]), _gaq.push(["_trackEvent", "Lead", "Contacted_Form", "Contact_Site_Sent"]), $.post("/wp-admin/admin-ajax.php?action=submit_contact_form", h, function (c)
					{
						a.googleTrackConversion(1052546512, "EVTbCKqV4ggQ0Kvy9QM"), b.hide(), $("html, body").animate(
						{
							scrollTop: 0
						}, "fast"), d.show(), $(".mobile.home.contact #container").css("top", "320px")
					})
				}
				return f.preventDefault(), !1
			})
		},
		submitLandingForm: function ()
		{
			var a = this,
				b = $(".contact #contact-form");
			$(".contact #contact-form #message");
			console.log("step 1");
			var c = b.serialize();
			$.post("/wp-admin/admin-ajax.php?action=submit_contact_form", c, function (c)
			{
				console.log("step 2"), a.googleTrackConversion(1052546512, "EVTbCKqV4ggQ0Kvy9QM"), _gaq.push(["_trackEvent", "Lead", "Contacted_Form", "Contact_landing_Sent"]), b.hide(), $("html, body").animate(
				{
					scrollTop: 0
				}, "fast"), thankyouMessage.show(), $(".mobile.home.contact #container").css("top", "320px")
			})
		},
		nextStepPopupForm: function ()
		{
			var a = this;
			$(".popup #leave-message").click(function (b)
			{
				var c = $(".popup #contact-form .step-1"),
					d = $(".popup #contact-form .step-2"),
					e = a.popupFormValidation();
				return e && (c.hide(), d.show()), a.submitPopupForm(), b.preventDefault(), !1
			})
		},
		popupFormValueSwitching: function ()
		{
			var a = $(".popup #contact-method"),
				b = $(".popup #type-email"),
				c = $(".popup #type-phone");
			a.change(function ()
			{
				"phone" == a.val() ? (c.show(), b.hide()) : (b.show(), c.hide())
			})
		},
		popupFormValidation: function ()
		{
			var a = $(".popup input, .popup select, .popup textarea"),
				b = ($(".popup #contact-form button"), $(".popup #contact-form #name")),
				c = ($(".popup #contact-form #contact-goal"), $(".popup #contact-form #contact-method")),
				d = $(".popup #contact-form #type-email"),
				e = $(".popup #contact-form #type-phone"),
				f = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
				g = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
			a.focus(function ()
			{
				$(this).removeClass("error")
			});
			var h = !1;
			return b.val() && b.val() != b.attr("placeholder") || (b.addClass("error"), h = !0), "phone" == c.val() ? 0 == g.test(e.val()) ? (e.addClass("error"), h = !0) : d.val("") : 0 == f.test(d.val()) ? (d.addClass("error"), h = !0) : e.val(""), h ? !1 : !0
		},
		submitPopupForm: function ()
		{
			var a = $(".popup #contact-form"),
				b = $(".popup #contact-form #message"),
				c = $(".popup .thankyou-message"),
				d = $(".contact .thankyou-message-form");
			a.submit(function (e)
			{
				var f = !1;
				if (b.val() && b.val() != b.attr("placeholder") || (b.addClass("error"), f = !0), !f)
				{
					var g = a.serialize();
					$.post("/wp-admin/admin-ajax.php?action=submit_contact_form", g, function (b)
					{
						a.hide(), c.show(), d.show(), setTimeout(function ()
						{
							$(".popup").fadeOut()
						}, 3e3)
					})
				}
				return e.preventDefault(), !1
			})
		},
		newsletterValidation: function ()
		{
			var a = $("#newsletter_form"),
				b = $(".field-name"),
				c = $(".field-email"),
				d = $(".newsletter .thankyou-message"),
				e = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			c.focus(function ()
			{
				$(this).removeClass("error")
			}), a.submit(function (f)
			{
				if (f.preventDefault(), !b.val() || b.val() == b.attr("placeholder")) return b.addClass("error"), !1;
				if (0 == e.test(c.val())) return c.addClass("error"), !1;
				var g = a.serialize();
				$.post("/proxies/newsletter.php", g, function (e)
				{
					null != e && "error" == e.status ? (b.addClass("error"), c.addClass("error"), console.log("Error with proxy")) : (_gaq.push(["_trackEvent", "Infolettre", "Sign Up", "SignUp_Go"]), a.slideUp(), d.slideDown())
				})
			})
		},
		landingValidation: function ()
		{
			var a = $("#landingform"),
				b = $("#fieldName"),
				c = $("#fieldEmail"),
				d = $(".thankyou-message"),
				e = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			c.focus(function ()
			{
				$(this).removeClass("error")
			}), a.submit(function (f)
			{
				if (f.preventDefault(), !b.val()) return b.addClass("error"), !1;
				if (0 == e.test(c.val())) return c.addClass("error"), !1;
				var g = a.serialize();
				$.get(o.link_cm, g), a.slideUp(), d.slideDown()
			})
		},
		placeholderSimulation: function ()
		{
			$("input[placeholder], textarea[placeholder]").each(function ()
			{
				$(this).val() === $(this).attr("placeholder") && $(this).data("skipCompare", "true"), 0 === $(this).val().length && ($(this).val($(this).attr("placeholder")), $(this).addClass("placeholder-on")), $(this).focus(function ()
				{
					$(this).val() == $(this).attr("placeholder") && ($(this).val(""), $(this).removeClass("placeholder-on"))
				}).blur(function ()
				{
					$(this).val().length > 0 && $(this).val() == $(this).attr("placeholder") && $(this).data("skipCompare", "true"), 0 == $(this).val().length && ($(this).val($(this).attr("placeholder")), $(this).addClass("placeholder-on"))
				})
			})
		},
		infiniteScroll: function ()
		{
			var a = $(".blog #loader"),
				b = $("#no-more-post");
			busy = !1, i = 1, offset = $("#i-scroll article:last").offset(), $(window).scroll(function ()
			{
				offset.top - $(this).height() <= $(this).scrollTop() && busy === !1 && (i++, busy = !0, $.get(document.location.href + "?next=" + i).done(function (c)
				{
					$("#i-scroll article", c).length ? ($("#i-scroll article:last").after($("#i-scroll", c).html()), offset = $("#i-scroll article:last").offset(), busy = !1) : (a.hide(), b.show())
				}).fail(function ()
				{
					a.hide(), b.show()
				}))
			})
		},
		unfixedHeaderByWindowHeight: function ()
		{
			var a = $(window).height(),
				b = getDeviceState(),
				c = 610;
			3 == b ? c = 710 : 4 == b && (c = 780), (c > a || $("body").hasClass("home portfolio")) && $("body").addClass("unfixed-header"), $(window).resize(function ()
			{
				var a = $(window).height();
				c > a || $("body").hasClass("home portfolio") ? $("body").addClass("unfixed-header") : $("body").removeClass("unfixed-header")
			})
		},
		teammateInfoOpen: function ()
		{
			var a = "",
				b = "",
				c = "",
				d = $("body"),
				e = "";
			$(".link-close").click(function ()
        {
          a = "", 
          b = "", 
          c = "", 
          $("aside").slideUp(), 
          d.removeClass("team-info-open")
        }), 
      $(".col-single-element").click(function ()
        {
          $(this).attr("data-id") != b ? 
          (d.addClass("team-info-open"), 
          currentDeviceState = getDeviceState(), 
          a = $(this).attr("data-col-" + currentDeviceState), 
          b = $(this).attr("data-id"), 
          c = $("aside.teammate-" + b), 
          "" == e ? 
            c.slideDown() 
          : $("aside.teammate-" + e).slideUp(400, function ()
            {
              c.slideDown()
            }), 
          e = b, 
          1 == currentDeviceState ? 
            $(".element-" + b).parent().parent().after(c) 
          : $(".col-" + currentDeviceState + "-" + a).parent().parent().after(c)) 
          : ($("aside").slideUp(), e = "", b = "")
        }), 
      $(window).resize(function ()
			{
				currentDeviceState = getDeviceState(), $("aside").hide(), c.show(), a = $(".element-" + b).attr("data-col-" + currentDeviceState), 1 == currentDeviceState ? $(".element-" + b).parent().parent().after(c) : $(".col-" + currentDeviceState + "-" + a).parent().parent().after(c)
			})
		},
		hidePhoneFieldContact: function ()
		{
			$(".contact select#contact-goal").blur(function ()
			{
				var a = $('.contact select#contact-method #phoneField, .contact .select-2 li[data-value="phone"]'),
					b = $('.contact select#contact-method #emailField, .contact .select-2 li[data-value="email"]'),
					c = $(".contact .select-2 .trigger"),
					d = $(".contact .select-2"),
					e = $(".contact #type-email"),
					f = $(".contact #type-phone");
				"candidats" == $(this).val() ? (c.html(b.html()), a.remove(), d.trigger("update.fs"), f.hide(), e.show()) : a.length || ("en" == o.language ? (d.find("select").append('<option id="phoneField" value="phone">phone</option>'), d.find("ul").append('<li data-value="phone" class="">phone</li>'), d.find("select").trigger("update.fs")) : (d.find("select").append('<option id="phoneField" value="phone">téléphone</option>'), d.find("ul").append('<li data-value="phone" class="">téléphone</li>'), d.find("select").trigger("update.fs")))
			})
		},
		hidePhoneFieldPopup: function ()
		{
			$(".popup select#contact-goal").blur(function ()
			{
				var a = $('.popup select#contact-method #phoneField, .popup .select-2 li[data-value="phone"]'),
					b = $('.popup select#contact-method #emailField, .popup .select-2 li[data-value="email"]'),
					c = $(".popup .select-2 .trigger"),
					d = $(".popup .select-2"),
					e = $(".popup #type-email"),
					f = $(".popup #type-phone");
				"candidats" == $(this).val() ? (c.html(b.html()), a.remove(), d.trigger("update.fs"), f.hide(), e.show()) : a.length || ("en" == o.language ? (d.find("select").append('<option id="phoneField" value="phone">phone</option>'), d.find("ul").append('<li data-value="phone" class="">phone</li>'), d.find("select").trigger("update.fs")) : (d.find("select").append('<option id="phoneField" value="phone">téléphone</option>'), d.find("ul").append('<li data-value="phone" class="">téléphone</li>'), d.find("select").trigger("update.fs")))
			})
		},
		landingstudio: function ()
		{
			var a = $(".landing-studio select"),
				b = window.location.hash.substr(1);
			a.fancySelect(
			{
				forceiOS: !1
			}), "" !== b && ($(".landing-studio select option").prop("selected", !1), $('.landing-studio select option[data-service="' + b + '"]').prop("selected", !0).change());
			var c = a.find(":selected").data("service");
			$('.service-item[data-service="' + c + '"]').show(), a.on("change", function ()
			{
				var a = $(this).find(":selected").data("service");
				$(".service-item").hide(), $('.service-item[data-service="' + a + '"]').show()
			}), $("#evaluation-form").submit(function (a)
			{
				a.preventDefault();
				var b = !1,
					c = $(".evaluation-form input, .evaluation-form textarea"),
					d = $(".evaluation-form #name"),
					e = ($(".evaluation-form #business"), $(".evaluation-form #email")),
					f = ($(".evaluation-form #phone"), $(".evaluation-form #description"), /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
				c.focus(function ()
				{
					$(this).removeClass("error")
				});
				var g = !1;
				if (d.val() && d.val() != d.attr("placeholder") || (d.addClass("error"), g = !0), 0 == f.test(e.val()) && (e.addClass("error"), g = !0), b = g ? !1 : !0)
				{
					var h = $(this).serialize();
					$.post("/wp-admin/admin-ajax.php?action=submit_landingstudio_evaluation_form", h, function (a)
					{
						var b = a;
						200 === b.code ? ($(".error-message").hide(), $("html,body").animate(
						{
							scrollTop: $("#top").offset().top
						}, 1e3, function ()
						{
							$(".studio-services-dropdown").hide(), $(".section-thankyou-content").slideDown(), $(".section-studio-content").slideUp()
						}), _gaq.push(["_trackEvent", "Studio Landing", "form_submit"])) : 500 === b.code && $(".error-message").text(b.message).show()
					})
				}
				return !1
			})
		}
	}))
});