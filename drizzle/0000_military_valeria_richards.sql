CREATE TABLE `categories` (
	`name` text PRIMARY KEY NOT NULL,
	`items` text NOT NULL,
	`icon` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`category` text NOT NULL,
	`description` text NOT NULL,
	`image` text DEFAULT '' NOT NULL,
	`variants` text DEFAULT '' NOT NULL,
	`unit` text DEFAULT 'item' NOT NULL,
	`price` text DEFAULT '' NOT NULL,
	`availability` text DEFAULT 'Confirm on quotation' NOT NULL,
	`featured` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `quotations` (
	`id` text PRIMARY KEY NOT NULL,
	`customer_name` text NOT NULL,
	`company` text,
	`phone` text NOT NULL,
	`whatsapp` text NOT NULL,
	`email` text,
	`location` text NOT NULL,
	`products` text NOT NULL,
	`notes` text,
	`requirements` text,
	`preferred_date` text,
	`created_at` text NOT NULL,
	`status` text DEFAULT 'New' NOT NULL
);
--> statement-breakpoint
CREATE TABLE `settings` (
	`id` text PRIMARY KEY NOT NULL,
	`value` text NOT NULL
);
