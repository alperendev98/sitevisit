(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1075:function(e,t,a){"use strict";a.r(t);var n=a(28),l=a(16),o=a(17),s=a(20),i=a(19),c=a(21),r=a(1),m=a.n(r),u=a(155),d=a(778),p=a.n(d),f=a(546),b=a(535),v=a(522),k=a(113),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(o)))).state={all:!1,selectedBooking:null,loading:!1,selectedBookings:0},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){Object(k.c)(),this.props.loadBookings()}},{key:"render",value:function(){var e=this.state.loading;return m.a.createElement("div",{className:"user-management"},m.a.createElement(u.Helmet,null,m.a.createElement("title",null,"Site Visit Booking| Booking List "),m.a.createElement("meta",{name:"description",content:"Site Visit Booking List"})),m.a.createElement(f.a,{title:"Booking List",match:this.props.match}),m.a.createElement(b.a,{fullBlock:!0},m.a.createElement("div",{className:"table-responsive"},this.props.bookings?m.a.createElement(p.a,{title:this.state.currentType,data:this.props.bookings,columns:[{name:"ID",options:{filter:!1,display:!1,sort:!0}},{name:"Full Name",options:{filter:!1,display:!0,sort:!0}},{name:"E-mail",options:{filter:!1,display:!0,sort:!0}},{name:"Phone Number",options:{filter:!1,display:!0,sort:!0}},{name:"Booking Time",options:{filter:!1,display:!0,sort:!0}},{name:"Site Visit Address",options:{filter:!1,display:!0,sort:!0}},{name:"Latitude",options:{filter:!1,display:!1,sort:!0}},{name:"Longitude",options:{filter:!1,display:!1,sort:!0}},{name:"Sales Person Id",options:{filter:!1,display:!1,sort:!0}},{name:"Sales Person",options:{filter:!0,sort:!0}}],options:{filterType:"dropdown",fixedHeader:!1,responsive:"scroll",print:!1,download:!1}}):""),e&&m.a.createElement(v.a,null)))}}]),t}(r.Component),E=a(24),g=Object(n.b)(function(e){var t=e.authUser,a=e.allData;return{user:t.user,data:a.data,loading:a.loading,bookings:a.bookings,bookingsData:a.bookingsData}},function(e){return{loadBookings:function(){e(Object(E.j)())}}})(h);t.default=g},522:function(e,t,a){"use strict";var n=a(1),l=a.n(n),o=a(149),s=a.n(o);t.a=function(){return l.a.createElement("div",{className:"d-flex justify-content-center loader-overlay"},l.a.createElement(s.a,null))}},535:function(e,t,a){"use strict";var n=a(16),l=a(17),o=a(20),s=a(19),i=a(21),c=a(1),r=a.n(c),m=a(29),u=a(4),d=a.n(u),p=a(522),f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(i)))).state={reload:!1,collapse:!0,close:!1},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"onCollapse",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"onReload",value:function(){this.setState({reload:!0});var e=this;setTimeout(function(){e.setState({reload:!1})},1500)}},{key:"onCloseSection",value:function(){this.setState({close:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.close,n=t.reload,l=t.collapse,o=this.props,s=o.children,i=o.collapsible,c=o.closeable,u=o.reloadable,f=o.heading,b=o.fullBlock,v=o.colClasses,k=o.customClasses,h=o.headingCustomClasses,E=o.contentCustomClasses,g=o.badge;return r.a.createElement("div",{className:d()(v||"",{"d-block":!l})},r.a.createElement("div",{className:d()("rct-block ".concat(k||""),{"d-none":a})},f&&r.a.createElement("div",{className:"rct-block-title ".concat(h||"")},r.a.createElement("h4",null,f," ",g&&r.a.createElement(m.a,{className:"p-1 ml-10",color:g.class},g.name)),(i||u||c)&&r.a.createElement("div",{className:"contextual-link"},i&&r.a.createElement("div",{onClick:function(){return e.onCollapse()}},r.a.createElement("i",{className:"ti-minus"})),u&&r.a.createElement("div",{onClick:function(){return e.onReload()}},r.a.createElement("i",{className:"ti-reload"})),c&&r.a.createElement("div",{onClick:function(){return e.onCloseSection()}},r.a.createElement("i",{className:"ti-close"})))),r.a.createElement(m.b,{isOpen:l},r.a.createElement("div",{className:d()(E||"",{"rct-block-content":!b,"rct-full-block":b})},s)),n&&r.a.createElement(p.a,null)))}}]),t}(c.Component);t.a=f},546:function(e,t,a){"use strict";var n=a(1),l=a.n(n),o=function(e){var t=e.title;return l.a.createElement("div",{className:"page-title d-flex justify-content-between align-items-center"},t&&l.a.createElement("div",{className:"page-title-wrap"},l.a.createElement("i",{className:"ti-angle-left"}),l.a.createElement("h2",{className:""},t)))};o.defaultProps={enableBreadCrumb:!0},t.a=o}}]);
//# sourceMappingURL=3.b2e3fa56.chunk.js.map