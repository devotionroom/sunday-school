declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"activities": {
"a-lunch-for-everyone.mdx": {
	id: "a-lunch-for-everyone.mdx";
  slug: "a-lunch-for-everyone";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"burning-bush-tissue-craft.mdx": {
	id: "burning-bush-tissue-craft.mdx";
  slug: "burning-bush-tissue-craft";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"colorful-coat-craft.mdx": {
	id: "colorful-coat-craft.mdx";
  slug: "colorful-coat-craft";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"counting-the-stars.mdx": {
	id: "counting-the-stars.mdx";
  slug: "counting-the-stars";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"creation-crafts.mdx": {
	id: "creation-crafts.mdx";
  slug: "creation-crafts";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"esther-crown-craft.mdx": {
	id: "esther-crown-craft.mdx";
  slug: "esther-crown-craft";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"first-aid-relay.mdx": {
	id: "first-aid-relay.mdx";
  slug: "first-aid-relay";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"fishers-of-men-net.mdx": {
	id: "fishers-of-men-net.mdx";
  slug: "fishers-of-men-net";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"five-loaves-basket-craft.mdx": {
	id: "five-loaves-basket-craft.mdx";
  slug: "five-loaves-basket-craft";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"five-smooth-stones-craft.mdx": {
	id: "five-smooth-stones-craft.mdx";
  slug: "five-smooth-stones-craft";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"fluffy-lost-sheep-craft.mdx": {
	id: "fluffy-lost-sheep-craft.mdx";
  slug: "fluffy-lost-sheep-craft";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"giant-problem-bigger-god.mdx": {
	id: "giant-problem-bigger-god.mdx";
  slug: "giant-problem-bigger-god";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"hide-and-sheep.mdx": {
	id: "hide-and-sheep.mdx";
  slug: "hide-and-sheep";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"i-spy-creation.mdx": {
	id: "i-spy-creation.mdx";
  slug: "i-spy-creation";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"jericho-trumpet-craft.mdx": {
	id: "jericho-trumpet-craft.mdx";
  slug: "jericho-trumpet-craft";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"jonah-whale-clothespin-craft.mdx": {
	id: "jonah-whale-clothespin-craft.mdx";
  slug: "jonah-whale-clothespin-craft";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"listening-ears-craft.mdx": {
	id: "listening-ears-craft.mdx";
  slug: "listening-ears-craft";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"never-empty-jar-craft.mdx": {
	id: "never-empty-jar-craft.mdx";
  slug: "never-empty-jar-craft";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"rainbow-promise-plate.mdx": {
	id: "rainbow-promise-plate.mdx";
  slug: "rainbow-promise-plate";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"royal-protocol.mdx": {
	id: "royal-protocol.mdx";
  slug: "royal-protocol";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"samaritan-bandages-craft.mdx": {
	id: "samaritan-bandages-craft.mdx";
  slug: "samaritan-bandages-craft";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"shut-lion-mouth-puppet.mdx": {
	id: "shut-lion-mouth-puppet.mdx";
  slug: "shut-lion-mouth-puppet";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"soaring-eagle-craft.mdx": {
	id: "soaring-eagle-craft.mdx";
  slug: "soaring-eagle-craft";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"stand-firm.mdx": {
	id: "stand-firm.mdx";
  slug: "stand-firm";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"starry-sky-promise-craft.mdx": {
	id: "starry-sky-promise-craft.mdx";
  slug: "starry-sky-promise-craft";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"storm-in-a-bottle-craft.mdx": {
	id: "storm-in-a-bottle-craft.mdx";
  slug: "storm-in-a-bottle-craft";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"the-big-picture-puzzle.mdx": {
	id: "the-big-picture-puzzle.mdx";
  slug: "the-big-picture-puzzle";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"the-empty-jar.mdx": {
	id: "the-empty-jar.mdx";
  slug: "the-empty-jar";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"the-gleaning-game.mdx": {
	id: "the-gleaning-game.mdx";
  slug: "the-gleaning-game";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"the-next-step.mdx": {
	id: "the-next-step.mdx";
  slug: "the-next-step";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"the-silent-march.mdx": {
	id: "the-silent-march.mdx";
  slug: "the-silent-march";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"the-tax-collector-game.mdx": {
	id: "the-tax-collector-game.mdx";
  slug: "the-tax-collector-game";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"trust-the-next-step.mdx": {
	id: "trust-the-next-step.mdx";
  slug: "trust-the-next-step";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"whats-in-your-hand.mdx": {
	id: "whats-in-your-hand.mdx";
  slug: "whats-in-your-hand";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"wheat-bundle-craft.mdx": {
	id: "wheat-bundle-craft.mdx";
  slug: "wheat-bundle-craft";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"which-way.mdx": {
	id: "which-way.mdx";
  slug: "which-way";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"who-is-calling.mdx": {
	id: "who-is-calling.mdx";
  slug: "who-is-calling";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"wind-and-waves.mdx": {
	id: "wind-and-waves.mdx";
  slug: "wind-and-waves";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"woven-fishing-net-craft.mdx": {
	id: "woven-fishing-net-craft.mdx";
  slug: "woven-fishing-net-craft";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
"zacchaeus-tree-craft.mdx": {
	id: "zacchaeus-tree-craft.mdx";
  slug: "zacchaeus-tree-craft";
  body: string;
  collection: "activities";
  data: InferEntrySchema<"activities">
} & { render(): Render[".mdx"] };
};
"lessons": {
"abraham-trusts-gods-promise.mdx": {
	id: "abraham-trusts-gods-promise.mdx";
  slug: "abraham-trusts-gods-promise";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"creation.mdx": {
	id: "creation.mdx";
  slug: "creation";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"daniel-in-the-lions-den.mdx": {
	id: "daniel-in-the-lions-den.mdx";
  slug: "daniel-in-the-lions-den";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"david-and-goliath.mdx": {
	id: "david-and-goliath.mdx";
  slug: "david-and-goliath";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"elijah-and-the-widow.mdx": {
	id: "elijah-and-the-widow.mdx";
  slug: "elijah-and-the-widow";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"esther-courage.mdx": {
	id: "esther-courage.mdx";
  slug: "esther-courage";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"jesus-calls-his-disciples.mdx": {
	id: "jesus-calls-his-disciples.mdx";
  slug: "jesus-calls-his-disciples";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"jesus-calms-the-storm.mdx": {
	id: "jesus-calms-the-storm.mdx";
  slug: "jesus-calms-the-storm";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"jesus-feeds-the-five-thousand.mdx": {
	id: "jesus-feeds-the-five-thousand.mdx";
  slug: "jesus-feeds-the-five-thousand";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"jonah-and-the-great-fish.mdx": {
	id: "jonah-and-the-great-fish.mdx";
  slug: "jonah-and-the-great-fish";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"joseph-god-was-with-him.mdx": {
	id: "joseph-god-was-with-him.mdx";
  slug: "joseph-god-was-with-him";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"joshua-and-jericho.mdx": {
	id: "joshua-and-jericho.mdx";
  slug: "joshua-and-jericho";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"moses-and-the-burning-bush.mdx": {
	id: "moses-and-the-burning-bush.mdx";
  slug: "moses-and-the-burning-bush";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"noah.mdx": {
	id: "noah.mdx";
  slug: "noah";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"ruth-faithfulness-and-redemption.mdx": {
	id: "ruth-faithfulness-and-redemption.mdx";
  slug: "ruth-faithfulness-and-redemption";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"samuel-hears-gods-voice.mdx": {
	id: "samuel-hears-gods-voice.mdx";
  slug: "samuel-hears-gods-voice";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"the-good-samaritan.mdx": {
	id: "the-good-samaritan.mdx";
  slug: "the-good-samaritan";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"the-lost-sheep.mdx": {
	id: "the-lost-sheep.mdx";
  slug: "the-lost-sheep";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"waiting-on-the-lord.mdx": {
	id: "waiting-on-the-lord.mdx";
  slug: "waiting-on-the-lord";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
"zacchaeus-meets-jesus.mdx": {
	id: "zacchaeus-meets-jesus.mdx";
  slug: "zacchaeus-meets-jesus";
  body: string;
  collection: "lessons";
  data: InferEntrySchema<"lessons">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
