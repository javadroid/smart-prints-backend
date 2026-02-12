import re
import os

# Configuration: Table name mapping and their current schema columns
# Based on libs/sql-schema/src/
TABLE_SCHEMAS = {
    'users': [
        '_id', 'id', 'title', 'playerId', 'roles', 'userType', 'username', 'status',
        'emailStatus', 'email', 'fullname', 'bio', 'firstname', 'lastname', 'phone',
        'password', 'profileImage', 'coverImage', 'isAdmin', 'isReseller',
        'isSuperAdmin', 'dob', 'state', 'country', 'gender', 'localGovernmentArea',
        'socialMediaProfile', 'residentialAddress', 'referral', 'refBy', 'refCode',
        'createdAt', 'updatedAt'
    ],
    'products': [
        '_id', 'id', 'displayName', 'isFeatured', 'is3d', 'isResell', 'isApproved',
        'isActive', 'name', 'userID', 'productID', 'description', 'image', 'price',
        'standardPrice', 'largePrice', 'basePrice', 'salePrice', 'additionalPrice',
        'backgroundIn', 'categoryID', 'category', 'quantity', 'type', 'sizeGuide',
        'measurement', 'distance', 'status', 'types', 'features', 'imageUrls',
        'mockups', 'designArea', 'availableColors', 'availableSizes', 'rating',
        'metadata', 'discountPrice', 'averageRating', 'createdAt', 'updatedAt'
    ],
    'orders': [
        '_id', 'id', 'userID', 'products', 'flutterwaveRef', 'paystackRef',
        'authorization_url', 'accessCode', 'tx_ref', 'isPaid', 'totalPrice',
        'deliveryFee', 'imageUrls', 'orderDetails', 'status', 'address',
        'shippingAddress', 'createdAt', 'updatedAt'
    ],
    'carts': [
        '_id', 'id', 'userID', 'size', 'productID', 'type', 'productName',
        'color', 'price', 'designImage', 'quantity', 'metadata', 'createdAt',
        'updatedAt'
    ],
    'categories_sql_model': [
        '_id', 'name', 'id', 'image', 'type', 'createdAt', 'updatedAt'
    ],
    'delivery_prices': [
        '_id', 'country', 'state', 'lga', 'zone', 'deliveryFee', 'additionalFee',
        'createdAt', 'updatedAt'
    ],
    'designs': [
        '_id', 'id', 'userID', 'name', 'url', 'tags', 'createdAt', 'updatedAt'
    ],
    'otp_sql_model': [
        'id', 'code', 'code1', 'status', 'duration', 'userID', 'type',
        'createdAt', 'updatedAt'
    ],
    'pickup_locations': [
        '_id', 'name', 'address', 'city', 'state', 'contactPhone', 'price', 'isActive'
    ],
    'product_colors': [
        '_id', 'name', 'hex', 'className'
    ],
    'site_settings': [
        '_id', 'name', 'heroType', 'heroImage', 'heroVideo', 'createdAt', 'updatedAt'
    ],
    'transactions': [
        'id', 'userID', 'amount', 'transactionType', 'status', 'reference',
        'description', 'orderID', 'productID', 'metadata', 'createdAt', 'updatedAt'
    ],
    'wallet_sql_model': [
        '_id', 'userID', 'email', 'accountName', 'accountNumber', 'bankName',
        'bankCode', 'customerCode', 'balance', 'currency', 'status',
        'createdAt', 'updatedAt'
    ],
    'withdraw_sql_model': [
        'id', 'userID', 'amount', 'walletID', 'status', 'createdAt', 'updatedAt'
    ],
    'zones': [
        '_id', 'name', 'lga', 'state', 'createdAt', 'updatedAt'
    ],
    'contact_us': [
        'id', 'fullName', 'email', 'message', 'status', 'createdAt', 'updatedAt'
    ]
}

# New CREATE TABLE definitions (simplified for the script to use)
# Ideally these should match TypeORM expectations exactly
CREATE_TABLE_DEFINITIONS = {
    'users': """CREATE TABLE `users` (
  `_id` varchar(36) NOT NULL,
  `id` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `playerId` varchar(255) DEFAULT NULL,
  `roles` text DEFAULT NULL,
  `userType` varchar(255) NOT NULL DEFAULT 'user',
  `username` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'active',
  `emailStatus` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `profileImage` varchar(255) DEFAULT NULL,
  `coverImage` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) NOT NULL DEFAULT 0,
  `isReseller` tinyint(1) NOT NULL DEFAULT 0,
  `isSuperAdmin` tinyint(1) NOT NULL DEFAULT 0,
  `dob` date DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `localGovernmentArea` varchar(255) DEFAULT NULL,
  `socialMediaProfile` longtext DEFAULT NULL,
  `residentialAddress` varchar(255) DEFAULT NULL,
  `referral` longtext DEFAULT NULL,
  `refBy` varchar(255) DEFAULT NULL,
  `refCode` varchar(255) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`_id`),
  UNIQUE KEY `IDX_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;""",

    'products': """CREATE TABLE `products` (
  `_id` varchar(36) NOT NULL,
  `id` varchar(255) NOT NULL,
  `displayName` varchar(255) DEFAULT NULL,
  `isFeatured` tinyint(1) NOT NULL DEFAULT 0,
  `is3d` tinyint(1) NOT NULL DEFAULT 0,
  `isResell` tinyint(1) NOT NULL DEFAULT 0,
  `isApproved` tinyint(1) NOT NULL DEFAULT 0,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `name` varchar(255) NOT NULL,
  `userID` varchar(255) NOT NULL,
  `productID` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `standardPrice` decimal(10,2) DEFAULT NULL,
  `largePrice` decimal(10,2) DEFAULT NULL,
  `basePrice` decimal(10,2) DEFAULT NULL,
  `salePrice` decimal(10,2) DEFAULT NULL,
  `additionalPrice` decimal(10,2) DEFAULT NULL,
  `backgroundIn` tinyint(1) NOT NULL DEFAULT 1,
  `categoryID` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT 0,
  `type` varchar(255) NOT NULL DEFAULT 'custom',
  `sizeGuide` varchar(255) DEFAULT NULL,
  `measurement通` varchar(255) DEFAULT NULL,
  `distance` float DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'active',
  `types` text DEFAULT NULL,
  `features` text DEFAULT NULL,
  `imageUrls` text DEFAULT NULL,
  `mockups` longtext DEFAULT NULL,
  `designArea` longtext DEFAULT NULL,
  `availableColors` longtext DEFAULT NULL,
  `availableSizes` longtext DEFAULT NULL,
  `rating` longtext DEFAULT NULL,
  `metadata` longtext DEFAULT NULL,
  `discountPrice` decimal(10,2) DEFAULT NULL,
  `averageRating` float DEFAULT 0,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;""",

    'orders': """CREATE TABLE `orders` (
  `_id` varchar(36) NOT NULL,
  `id` varchar(255) NOT NULL,
  `userID` varchar(255) NOT NULL,
  `products` longtext DEFAULT NULL,
  `flutterwaveRef` varchar(255) DEFAULT NULL,
  `paystackRef` varchar(255) DEFAULT NULL,
  `authorization_url` varchar(255) DEFAULT NULL,
  `accessCode` varchar(255) DEFAULT NULL,
  `tx_ref` varchar(255) DEFAULT NULL,
  `isPaid` tinyint(1) NOT NULL DEFAULT 0,
  `totalPrice` decimal(10,2) NOT NULL,
  `deliveryFee` decimal(10,2) NOT NULL,
  `imageUrls` text DEFAULT NULL,
  `orderDetails` longtext DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `address` varchar(255) NOT NULL,
  `shippingAddress` longtext DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;""",

    'carts': """CREATE TABLE `carts` (
  `_id` varchar(36) NOT NULL,
  `id` varchar(255) NOT NULL,
  `userID` varchar(255) NOT NULL,
  `size` varchar(255) DEFAULT '',
  `productID` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'custom',
  `productName` varchar(255) NOT NULL,
  `color` longtext DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `designImage` varchar(255) NOT NULL,
  `quantity` int(11) DEFAULT 1,
  `metadata` longtext DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;""",

    'categories_sql_model': """CREATE TABLE `categories_sql_model` (
  `_id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `id` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'custom',
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;""",

    'delivery_prices': """CREATE TABLE `delivery_prices` (
  `_id` varchar(36) NOT NULL,
  `country` varchar(100) NOT NULL,
  `state` varchar(100) NOT NULL,
  `lga` varchar(100) NOT NULL,
  `zone` varchar(100) NOT NULL,
  `deliveryFee` decimal(10,2) NOT NULL DEFAULT 3000.00,
  `additionalFee` decimal(10,2) NOT NULL DEFAULT 1000.00,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`_id`),
  UNIQUE KEY `idx_delivery_prices_unique` (`country`, `state`, `lga`, `zone`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;""",

    'designs': """CREATE TABLE `designs` (
  `_id` varchar(36) NOT NULL,
  `id` varchar(255) NOT NULL,
  `userID` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `tags` text DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;""",

    'otp_sql_model': """CREATE TABLE `otp_sql_model` (
  `id` varchar(36) NOT NULL,
  `code` varchar(255) NOT NULL,
  `code1` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'active',
  `duration` int(11) NOT NULL DEFAULT 30,
  `userID` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'EmailVerification',
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_otp_code` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;""",

    'pickup_locations': """CREATE TABLE `pickup_locations` (
  `_id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `contactPhone` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL DEFAULT 0.00,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;""",

    'product_colors': """CREATE TABLE `product_colors` (
  `_id` varchar(36) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `hex` varchar(255) DEFAULT NULL,
  `className` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;""",

    'site_settings': """CREATE TABLE `site_settings` (
  `_id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT 'default',
  `heroType` varchar(255) NOT NULL DEFAULT 'image',
  `heroImage` varchar(255) DEFAULT NULL,
  `heroVideo` varchar(255) DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`_id`),
  UNIQUE KEY `IDX_site_settings_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;""",

    'transactions': """CREATE TABLE `transactions` (
  `id` varchar(36) NOT NULL,
  `userID` varchar(255) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `transactionType` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `reference` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `orderID` varchar(255) DEFAULT NULL,
  `productID` varchar(255) DEFAULT NULL,
  `metadata` longtext DEFAULT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;""",

    'wallet_sql_model': """CREATE TABLE `wallet_sql_model` (
  `_id` varchar(36) NOT NULL,
  `userID` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `accountName` varchar(255) NOT NULL,
  `accountNumber` varchar(255) NOT NULL,
  `bankName` varchar(255) NOT NULL,
  `bankCode` varchar(255) NOT NULL,
  `customerCode` varchar(255) NOT NULL DEFAULT '',
  `balance` decimal(10,2) NOT NULL DEFAULT 0.00,
  `currency` varchar(255) NOT NULL DEFAULT 'NGN',
  `status` varchar(255) DEFAULT 'active',
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;""",

    'withdraw_sql_model': """CREATE TABLE `withdraw_sql_model` (
  `id` varchar(36) NOT NULL,
  `userID` varchar(255) NOT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `walletID` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;""",

    'zones': """CREATE TABLE `zones` (
  `_id` varchar(36) NOT NULL,
  `name` varchar(255) NOT NULL,
  `lga` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;""",

    'contact_us': """CREATE TABLE `contact_us` (
  `id` varchar(36) NOT NULL,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'pending',
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;"""
}

def parse_val(val_str):
    # Basic SQL value parser
    if val_str.upper() == 'NULL':
        return None
    if val_str.startswith("'") and val_str.endswith("'"):
        return val_str[1:-1].replace("''", "'")
    return val_str

def format_val(val):
    if val is None:
        return 'NULL'
    # Escape single quotes
    escaped = str(val).replace("'", "''")
    return f"'{escaped}'"

def process_sql(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    # Split into blocks by -- -------------------------------------------------------- or similar
    # or just split by CREATE TABLE
    
    # We'll use a regex to find all CREATE TABLE and INSERT INTO
    # But it's safer to reconstruct the file.
    
    header = """-- Updated SQL Dump
-- Generated from TypeORM schemas while preserving production data
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET FOREIGN_KEY_CHECKS = 0;
START TRANSACTION;
SET time_zone = "+00:00";
"""
    
    output = [header]
    
    # Process each configured table
    for table_name in TABLE_SCHEMAS.keys():
        output.append(f"\n-- --------------------------------------------------------\n")
        output.append(f"-- Table structure for table `{table_name}`\n--\n")
        output.append(f"DROP TABLE IF EXISTS `{table_name}`;\n")
        if table_name in CREATE_TABLE_DEFINITIONS:
            output.append(CREATE_TABLE_DEFINITIONS[table_name] + "\n")
        
        # Extract data for this table from the original dump
        # Look for INSERT INTO `table_name`
        data_pattern = rf"INSERT INTO `{table_name}` \((.*?)\) VALUES\s*(.*?);"
        matches = re.finditer(data_pattern, content, re.DOTALL | re.IGNORECASE)
        
        insert_stmts = []
        for match in matches:
            cols_str = match.group(1)
            values_block = match.group(2)
            
            # cols_str is like `_id`, `id`, ...
            cols = [c.strip(' `') for c in cols_str.split(',')]
            
            # values_block can contain multiple (val1, val2, ...), (val3, val4, ...)
            # This is tricky to parse with regex due to nested parentheses and strings
            # Simple parser for values
            
            new_cols = TABLE_SCHEMAS[table_name]
            
            # Map old columns to indices
            col_to_idx = {col: i for i, col in enumerate(cols)}
            
            # Split values_block into individual rows
            # This is simplified: assumes values are not complex enough to break this split
            # A more robust parser would be better but let's try something decent
            rows = []
            curr_row = ""
            paren_count = 0
            in_string = False
            for char in values_block:
                if char == "'" and (not curr_row or curr_row[-1] != "\\"):
                    in_string = not in_string
                if not in_string:
                    if char == "(":
                        paren_count += 1
                        if paren_count == 1:
                            curr_row = ""
                            continue
                    elif char == ")":
                        paren_count -= 1
                        if paren_count == 0:
                            rows.append(curr_row)
                            curr_row = ""
                            continue
                if paren_count > 0:
                    curr_row += char
            
            filtered_rows = []
            for row in rows:
                # Split row into values
                vals = []
                curr_val = ""
                v_in_string = False
                v_paren_count = 0
                for char in row:
                    if char == "'" and (not curr_val or curr_val[-1] != "\\"):
                        v_in_string = not v_in_string
                    if not v_in_string:
                        if char == "(": v_paren_count += 1
                        elif char == ")": v_paren_count -= 1
                        elif char == "," and v_paren_count == 0:
                            vals.append(curr_val.strip())
                            curr_val = ""
                            continue
                    curr_val += char
                vals.append(curr_val.strip())
                
                # Now filter values to match new schema
                new_vals = []
                for new_col in new_cols:
                    if new_col in col_to_idx:
                        new_vals.append(vals[col_to_idx[new_col]])
                    else:
                        new_vals.append('NULL')
                
                filtered_rows.append(f"({', '.join(new_vals)})")
            
            if filtered_rows:
                stmt = f"INSERT INTO `{table_name}` (`{'`, `'.join(new_cols)}`) VALUES\n"
                stmt += ",\n".join(filtered_rows) + ";"
                insert_stmts.append(stmt)
        
        if insert_stmts:
            output.append(f"\n-- Dumping data for table `{table_name}`\n--\n")
            output.extend(insert_stmts)
            output.append("\n")

    output.append("\nSET FOREIGN_KEY_CHECKS = 1;\nCOMMIT;\n")
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.writelines(output)

if __name__ == "__main__":
    process_sql('wwwsmart_smartprints (1).sql', 'wwwsmart_smartprints_updated.sql')
    print("Optimization complete. Output saved to wwwsmart_smartprints_updated.sql")
