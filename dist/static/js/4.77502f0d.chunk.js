(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1074:function(e,t,a){"use strict";a.r(t);var n=a(28),l=a(16),c=a(17),o=a(21),s=a(19),r=a(20),i=a(1),u=a.n(i),m=a(153),d=a(545),f=a(534),v=a(521),p=a(905),b=a.n(p),h=a(112),k=a.n(h),E=(a(242),a(241),b.a.momentLocalizer(k.a)),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state={loading:!1,events:[{start:new Date,end:new Date(k()().add(1,"days")),title:"Some title"}]},a}return Object(r.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.loadBookings()}},{key:"onReload",value:function(){this.props.loadBookings()}},{key:"render",value:function(){var e=this.state.loading;return u.a.createElement("div",{className:"user-management"},u.a.createElement(m.Helmet,null,u.a.createElement("title",null,"Site Visit Booking| Booking Calendar "),u.a.createElement("meta",{name:"description",content:"Site Visit Booking Calendar"})),u.a.createElement(d.a,{title:"Booking Calendar",match:this.props.match}),u.a.createElement(f.a,{fullBlock:!0},u.a.createElement(b.a,{localizer:E,events:this.state.events,startAccessor:"start",endAccessor:"end"}),e&&u.a.createElement(v.a,null)))}}]),t}(i.Component),C=a(24),j=Object(n.b)(function(e){var t=e.authUser,a=e.allData;return{user:t.user,data:a.data,loading:a.loading,bookings:a.bookings}},function(e){return{loadBookings:function(){e(Object(C.j)())}}})(g);t.default=j},521:function(e,t,a){"use strict";var n=a(1),l=a.n(n),c=a(147),o=a.n(c);t.a=function(){return l.a.createElement("div",{className:"d-flex justify-content-center loader-overlay"},l.a.createElement(o.a,null))}},534:function(e,t,a){"use strict";var n=a(16),l=a(17),c=a(21),o=a(19),s=a(20),r=a(1),i=a.n(r),u=a(29),m=a(4),d=a.n(m),f=a(521),v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(s)))).state={reload:!1,collapse:!0,close:!1},a}return Object(s.a)(t,e),Object(l.a)(t,[{key:"onCollapse",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"onReload",value:function(){this.setState({reload:!0});var e=this;setTimeout(function(){e.setState({reload:!1})},1500)}},{key:"onCloseSection",value:function(){this.setState({close:!0})}},{key:"render",value:function(){var e=this,t=this.state,a=t.close,n=t.reload,l=t.collapse,c=this.props,o=c.children,s=c.collapsible,r=c.closeable,m=c.reloadable,v=c.heading,p=c.fullBlock,b=c.colClasses,h=c.customClasses,k=c.headingCustomClasses,E=c.contentCustomClasses,g=c.badge;return i.a.createElement("div",{className:d()(b||"",{"d-block":!l})},i.a.createElement("div",{className:d()("rct-block ".concat(h||""),{"d-none":a})},v&&i.a.createElement("div",{className:"rct-block-title ".concat(k||"")},i.a.createElement("h4",null,v," ",g&&i.a.createElement(u.a,{className:"p-1 ml-10",color:g.class},g.name)),(s||m||r)&&i.a.createElement("div",{className:"contextual-link"},s&&i.a.createElement("div",{onClick:function(){return e.onCollapse()}},i.a.createElement("i",{className:"ti-minus"})),m&&i.a.createElement("div",{onClick:function(){return e.onReload()}},i.a.createElement("i",{className:"ti-reload"})),r&&i.a.createElement("div",{onClick:function(){return e.onCloseSection()}},i.a.createElement("i",{className:"ti-close"})))),i.a.createElement(u.b,{isOpen:l},i.a.createElement("div",{className:d()(E||"",{"rct-block-content":!p,"rct-full-block":p})},o)),n&&i.a.createElement(f.a,null)))}}]),t}(r.Component);t.a=v},545:function(e,t,a){"use strict";var n=a(1),l=a.n(n),c=function(e){var t=e.title;return l.a.createElement("div",{className:"page-title d-flex justify-content-between align-items-center"},t&&l.a.createElement("div",{className:"page-title-wrap"},l.a.createElement("i",{className:"ti-angle-left"}),l.a.createElement("h2",{className:""},t)))};c.defaultProps={enableBreadCrumb:!0},t.a=c}}]);
//# sourceMappingURL=4.77502f0d.chunk.js.map