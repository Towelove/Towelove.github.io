(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{359:function(a,t,e){"use strict";e.r(t);var r=e(14),s=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"调优策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调优策略"}},[a._v("#")]),a._v(" 调优策略")]),a._v(" "),t("h2",{attrs:{id:"redis缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis缓存"}},[a._v("#")]),a._v(" Redis缓存")]),a._v(" "),t("p",[a._v("为了提高项目的访问速度，使用缓存是很正常的，可以减少请求打到MySQL中，在提高响应速度的同时减少了数据库的压力，但是使用Redis缓存将需要面临如下三个问题，下面三个小章节介绍了我们是如何解决这三个问题的。")]),a._v(" "),t("h3",{attrs:{id:"可用方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可用方案"}},[a._v("#")]),a._v(" 可用方案：")]),a._v(" "),t("h3",{attrs:{id:"springcache集成redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#springcache集成redis"}},[a._v("#")]),a._v(" SpringCache集成Redis")]),a._v(" "),t("h3",{attrs:{id:"rediscache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rediscache"}},[a._v("#")]),a._v(" RedisCache")]),a._v(" "),t("h3",{attrs:{id:"缓存穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[a._v("#")]),a._v(" 缓存穿透")]),a._v(" "),t("h3",{attrs:{id:"缓存并发"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存并发"}},[a._v("#")]),a._v(" 缓存并发")]),a._v(" "),t("h3",{attrs:{id:"缓存失效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存失效"}},[a._v("#")]),a._v(" 缓存失效")]),a._v(" "),t("h3",{attrs:{id:"与mysql的数据一致性问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#与mysql的数据一致性问题"}},[a._v("#")]),a._v(" 与MySQL的数据一致性问题")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://javaguide.cn/database/redis/3-commonly-used-cache-read-and-write-strategies.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("[三种缓存的读写策略]"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.iocoder.cn/Fight/How-Redis-and-MySQL-double-write-consistency-guarantee/?yudao",target:"_blank",rel:"noopener noreferrer"}},[a._v("[Redis和MySQL双写一致性如何保证]"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzIyOTYxNDI5OA==&mid=2247487312&idx=1&sn=fa19566f5729d6598155b5c676eee62d&chksm=e8beb8e5dfc931f3e35655da9da0b61c79f2843101c130cf38996446975014f958a6481aacf1&scene=178&cur_album_id=1699766580538032128#rd",target:"_blank",rel:"noopener noreferrer"}},[a._v("[缓存和数据库一致性问题详细版]"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"实际使用方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实际使用方式"}},[a._v("#")]),a._v(" 实际使用方式")]),a._v(" "),t("h2",{attrs:{id:"请求路径的封装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求路径的封装"}},[a._v("#")]),a._v(" 请求路径的封装")]),a._v(" "),t("p",[a._v("我们的项目使用的是RESTFul风格来发送请求，那么这就意味着有编程基础的人，以及对项目有恶意的人可以很容易的了解我们项目的路径设置规则，一次为了防止这种恶意攻击，我们对真正展示在浏览器地址栏的路径进行了封装")]),a._v(" "),t("p",[a._v("比如原本的一个请求路径：http://123.123.123.123:8080/user/get可能就会变成如下一个请求")]),a._v(" "),t("p",[a._v("http://123.123.123.123:8080/lasd123/a123")]),a._v(" "),t("h2",{attrs:{id:"多线程发送任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#多线程发送任务"}},[a._v("#")]),a._v(" 多线程发送任务")]),a._v(" "),t("p",[a._v("我们知道我们的项目中的消息的任务是有时间的，因此我们可以按照时间对任务进行排序，并且使用多线程去发送这些任务。那么可以考虑允许多线程写读的ConcurrentLinkedQueue，既保证了FIFO，并且可以保证多线程下的线程安全策略。")]),a._v(" "),t("h2",{attrs:{id:"任务的封装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#任务的封装"}},[a._v("#")]),a._v(" 任务的封装")]),a._v(" "),t("p",[a._v("任务可以使用Future陪着Semaphore来实现所有任务同时完成后的应答，同时Future在任务完成后是有返回值的，我们就知道那些任务是失败了的，就可以进行失败重试。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.notion.so/image/https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2023%2Fpng%2F34806522%2F1678779397411-26d86cc7-67e4-400f-ab54-23c01a353de8.png?id=044d5fef-dfe8-4f17-9742-9b60875f784b&table=block&spaceId=b64c4d64-f403-4087-86e0-a1e8fdb8361f&width=2000&userId=c25e5a34-6e8a-4a43-ba9f-f420d2f8d2b7&cache=v2",alt:"https://cdn.nlark.com/yuque/0/2023/png/34806522/1678779397411-26d86cc7-67e4-400f-ab54-23c01a353de8.png"}})]),a._v(" "),t("h2",{attrs:{id:"线程池动态调优"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程池动态调优"}},[a._v("#")]),a._v(" 线程池动态调优")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://tech.meituan.com/2020/04/02/java-pooling-pratice-in-meituan.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("线程池线程数量动态调优"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("在我们买的面试题里面有对线程池的动态调优方法")]),a._v(" "),t("h2",{attrs:{id:"任务获取数量调优"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#任务获取数量调优"}},[a._v("#")]),a._v(" 任务获取数量调优")]),a._v(" "),t("p",[a._v("忽然想到 我们的每次查询出来的任务数量应该是动态可变的 也就是先select count 然后分片")]),a._v(" "),t("p",[a._v("得考虑如何做到动态sql")]),a._v(" "),t("p",[a._v("因为如果说任务很多 在某一个时间段就会查询出来特别多的任务 有点危")]),a._v(" "),t("h2",{attrs:{id:"异步任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异步任务"}},[a._v("#")]),a._v(" 异步任务")]),a._v(" "),t("p",[a._v("异步任务就是为了解耦来做的，当一个线程的执行结果不依赖之前的执行结果的时候，为了提高性能，我们就可以使用异步任务来完成接下来的任务，比如日志的记录等。")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.iocoder.cn/Spring-Boot/Async-Job/",target:"_blank",rel:"noopener noreferrer"}},[a._v("SpringBoot异步任务入门"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("其中需要注意的一点是，对于全局异步任务异常处理器。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("* 只能拦截返回类型非 Future 的异步调用方法。\n* 查看AsyncExecutionAspectSupport#handleError(Throwable ex, Method method, Object... params)\n* 的源码，可以很容易得到这个结论\n* 所以返回类型为 Future 的异步调用方法，\n* 需要通过 [异步回调] 来处理。也就是设定addCallBack()方法来处理\n* 并且这个方法只能对直接拥有@Async的方法扔出的报错能进行处理\n* 而再方法中调用了包含@Async的方法是不能的\n")])])]),t("p",[a._v("这里我解释一下最后两行是什么意思，也就是，虽然我在测试中调用了testAsyncWithCallBack方法，并且这个方法调用了一个异步方法，但是这个异步方法发出的错误并不会被全局异步任务处理器给处理，我们必须直接调用包含了@Async注解的方法，其报错才会被全局异步任务处理器所处理。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://www.notion.so/image/https%3A%2F%2Fcdn.nlark.com%2Fyuque%2F0%2F2023%2Fpng%2F34806522%2F1679631291313-f51c4a07-a017-430c-aa44-3c97f756c3a0.png?id=2440b21e-3fd7-4c3b-b5f9-da706a16e68b&table=block&spaceId=b64c4d64-f403-4087-86e0-a1e8fdb8361f&width=2000&userId=c25e5a34-6e8a-4a43-ba9f-f420d2f8d2b7&cache=v2",alt:"https://cdn.nlark.com/yuque/0/2023/png/34806522/1679631291313-f51c4a07-a017-430c-aa44-3c97f756c3a0.png"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);