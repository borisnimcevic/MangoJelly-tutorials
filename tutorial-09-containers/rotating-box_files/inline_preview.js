(function(g){var window=this;'use strict';var rkb=function(a){g.X.call(this,{G:"div",S:"ytp-inline-preview-ui"});this.yg=!1;this.player=a;this.T(a,"onStateChange",this.GQ);this.T(a,"videodatachange",this.Ww);this.T(a,"onInlinePreviewModeChange",this.B5);this.Af=new g.Bq(this.qw,null,this);g.H(this,this.Af)},J6=function(a){g.XT.call(this,a);
this.j=new rkb(this.player);g.H(this,this.j);this.j.hide();g.YS(this.player,this.j.element,4);a.isInline()&&(this.load(),a=a.getRootNode(),g.Mq(a,["ytp-inline-preview-mode","ytp-no-contextmenu"]))};
g.w(rkb,g.X);g.k=rkb.prototype;
g.k.AN=function(){this.tooltip=new g.xW(this.player,this);g.H(this,this.tooltip);g.YS(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Yc=new g.GU(this.player);g.H(this,this.Yc);this.Ak=new g.X({G:"div",Na:["ytp-inline-preview-scrim"]});g.H(this,this.Ak);this.Ak.Ja(this.element);this.T(this.Ak.element,"click",this.gI);this.Oj=new g.qW(this.player,this,300);g.H(this,this.Oj);this.Oj.Ja(this.Ak.element);this.controls=new g.X({G:"div",S:"ytp-inline-preview-controls"});g.H(this,this.controls);
this.controls.Ja(this.element);var a=new g.IV(this.player,this,!1);g.H(this,a);a.Ja(this.controls.element);a=new g.oW(this.player,this);g.H(this,a);a.Ja(this.controls.element);this.Pc=new g.PV(this.player,this);g.H(this,this.Pc);g.YS(this.player,this.Pc.element,4);this.T(this.player,"appresize",this.Kb);this.T(this.player,"fullscreentoggled",this.Kb);this.Kb()};
g.k.show=function(){g.Cq(this.Af);this.yg||(this.AN(),this.yg=!0);0!==this.player.getPlayerState()&&g.X.prototype.show.call(this);this.Pc.show();this.player.Qa("onInlinePreviewUiReady")};
g.k.hide=function(){this.Af.stop();g.X.prototype.hide.call(this);this.player.isInline()||this.yg&&this.Pc.hide()};
g.k.xa=function(){g.X.prototype.xa.call(this)};
g.k.gI=function(a){a.target===this.Ak.element&&this.player.Qa("onExpandInlinePreview",a)};
g.k.B5=function(){g.Pq(this.player.getRootNode(),"ytp-inline-preview-mode",this.player.isInline())};
g.k.cf=function(){this.Pc.Bc();this.Oj.Bc()};
g.k.qw=function(){this.cf();g.Cq(this.Af)};
g.k.Kb=function(){g.aW(this.Pc,0,this.player.qb().getPlayerSize().width,!1);g.QV(this.Pc)};
g.k.GQ=function(a){this.player.isInline()&&(0===a?this.hide():this.show())};
g.k.Ww=function(a,b){if(this.player.isInline()){g.Pq(this.player.getRootNode(),"ytp-show-inline-preview-audio-controls",b.WJ);var c,d,e;a=!(null==(e=null==(c=b.getPlayerResponse())?void 0:null==(d=c.playerConfig)?void 0:d.inlinePlaybackConfig)||!e.showScrubbingControls);g.Pq(this.player.getRootNode(),"ytp-hide-inline-preview-progress-bar",!a)}};
g.k.Hc=function(){return this.tooltip};
g.k.Mg=function(){return!1};
g.k.kh=function(){return!1};
g.k.qm=function(){return!1};
g.k.fJ=function(){};
g.k.mq=function(){};
g.k.Ty=function(){};
g.k.hn=function(){return null};
g.k.IG=function(){return null};
g.k.QM=function(){return new g.ye(0,0)};
g.k.Uk=function(){return new g.Kn(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Cw=function(a,b,c,d,e){var f=d=0,h=0,l=g.mo(a);if(b){c=g.Kq(b,"ytp-mute-button");var m=g.Kq(b,"ytp-subtitles-button"),n=g.Wn(b,this.element);b=g.mo(b);d=n.y+40;if(m||c)h=n.x-l.width+b.width}else h=c-l.width/2,f=35;b=this.player.qb().getPlayerSize().width;h=g.qe(h,0,b-l.width);d?(a.style.top=d+(e||0)+"px",a.style.bottom=""):(a.style.top="",a.style.bottom=f+"px");a.style.left=h+"px"};
g.k.showControls=function(){};
g.k.Pp=function(){};
g.k.fm=function(){return!1};
g.k.JE=function(){};
g.k.vA=function(){};
g.k.Kr=function(){};
g.k.Jr=function(){};
g.k.qy=function(){};
g.k.Ps=function(){};
g.k.tE=function(){};g.w(J6,g.XT);J6.prototype.ul=function(){return!1};
J6.prototype.load=function(){this.player.hideControls();this.j.show()};
J6.prototype.unload=function(){this.player.showControls();this.j.hide()};g.WT("inline_preview",J6);})(_yt_player);
