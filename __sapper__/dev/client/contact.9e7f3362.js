import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.e22c6304.js';

/* src/routes/contact.svelte generated by Svelte v3.34.0 */

const file = "src/routes/contact.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let p0;
	let t3;
	let t4;
	let p1;
	let t5;

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("Contact the Job App");
			t2 = space();
			p0 = element("p");
			t3 = text("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptas earum\n\tplaceat distinctio nulla amet ut. Animi obcaecati, dicta, velit exercitationem\n\tcommodi ut earum deserunt aut ad est minus placeat.");
			t4 = space();
			p1 = element("p");
			t5 = text("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptas earum\n\tplaceat distinctio nulla amet ut. Animi obcaecati, dicta, velit exercitationem\n\tcommodi ut earum deserunt aut ad est minus placeat.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-rg684o\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Contact the Job App");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptas earum\n\tplaceat distinctio nulla amet ut. Animi obcaecati, dicta, velit exercitationem\n\tcommodi ut earum deserunt aut ad est minus placeat.");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque voluptas earum\n\tplaceat distinctio nulla amet ut. Animi obcaecati, dicta, velit exercitationem\n\tcommodi ut earum deserunt aut ad est minus placeat.");
			p1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Contact";
			add_location(h1, file, 4, 0, 54);
			add_location(p0, file, 6, 0, 84);
			add_location(p1, file, 11, 0, 306);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t5);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(p1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Contact", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Contact> was created with unknown prop '${key}'`);
	});

	return [];
}

class Contact extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Contact",
			options,
			id: create_fragment.name
		});
	}
}

export default Contact;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC45ZTdmMzM2Mi5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
