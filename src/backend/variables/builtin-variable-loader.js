"use strict";

const replaceVariableManager = require("./replace-variable-manager");

exports.loadReplaceVariables = () => {
    [
        'account-creation-date',
        'active-chat-user-count',
        'arg-array-raw',
        'arg-array',
        'arg-count',
        'arg',
        'array-add-raw',
        'array-add',
        'array-element-raw',
        'array-element',
        'array-filter-raw',
        'array-filter',
        'array-find-index-raw',
        'array-find-index',
        'array-find-raw',
        'array-find',
        'array-from-raw',
        'array-join-raw',
        'array-join',
        'array-length-raw',
        'array-length',
        'array-remove-raw',
        'array-remove',
        'array-reverse-raw',
        'array-reverse',
        'array-shuffle-raw',
        'array-shuffle',
        'audio-duration',
        'bits-badge-tier',
        'bits-badge-unlocked-message',
        'bits-cheered',
        'bits-leaderboard',
        'bits-top-cheerers-raw',
        'bits-top-cheerers',
        'bot',
        'category-image-url',
        'category',
        'chat-message-animated-emote-urls',
        'chat-message-emote-names',
        'chat-message-emote-urls',
        'chat-message',
        'chat-messages',
        'chat-mode-duration',
        'chat-mode-state',
        'chat-mode',
        'cheer-bits',
        'cheer-message',
        'cheer-total-bits',
        'commafy',
        'command-trigger',
        'concat',
        'convert-from-json',
        'convert-to-json',
        'count',
        'counter',
        'currency-name',
        'currency-rank',
        'currency',
        'current-viewer-count',
        'custom-role-user-count',
        'custom-role-users-raw',
        'custom-role-users',
        'custom-variable-created-data',
        'custom-variable-created-name',
        'custom-variable-expired-data',
        'custom-variable-expired-name',
        'custom-variable-keys-raw',
        'custom-variable-keys',
        'custom-variable-raw',
        'custom-variable',
        'date',
        'discord-timestamp',
        'donation-amount-formatted',
        'donation-amount',
        'donation-from',
        'donation-message',
        'effect-output',
        'ensure-number',
        'eval-vars',
        'file-exists',
        'file-line-count',
        'follow-age',
        'follow-count',
        'game',
        'gift-count',
        'gift-duration',
        'gift-giver-user',
        'gift-receiver-user',
        'gift-receivers-raw',
        'gift-receivers',
        'gift-sub-months',
        'gift-sub-type',
        'has-role',
        'has-roles',
        'loop-count',
        'loop-item',
        'math',
        'mod-reason',
        'moderator',
        'new-currency-amount',
        'number-ceil',
        'number-floor',
        'number-max',
        'number-min',
        'number-pad',
        'number-round',
        'object-set-property-raw',
        'object-set-property',
        'object-walk-path-raw',
        'object-walk-path',
        'ordinal-indicator',
        'preset-list-arg',
        'previous-currency-amount',
        'profile-page-bytebin-token',
        'quick-store',
        'quote',
        'quote-as-object',
        'quote-as-raw-object',
        'raid-viewer-count',
        'random-active-viewer',
        'random-advice',
        'random-custom-role-user',
        'random-dad-joke',
        'random-number',
        'random-reddit-image',
        'random-viewer',
        'read-api-raw',
        'read-api',
        'read-file',
        'regex-exec',
        'regex-matches-raw',
        'regex-matches',
        'regex-test',
        'replace',
        'reward-cost',
        'reward-description',
        'reward-id',
        'reward-image-url',
        'reward-message',
        'reward-name',
        'reward-redemption-id',
        'roll-dice',
        'run-effect',
        'spoofed/all',
        'spoofed/and',
        'spoofed/any',
        'spoofed/if',
        'spoofed/nall',
        'spoofed/nand',
        'spoofed/nany',
        'spoofed/nor',
        'spoofed/not',
        'spoofed/or',
        'stream-title',
        'streamer',
        'sub-count',
        'sub-message',
        'sub-months',
        'sub-points',
        'sub-streak',
        'sub-type',
        'sub-users',
        'target',
        'text-capitalize',
        'text-contains',
        'text-decode-from-html',
        'text-decode-from-url',
        'text-encode-for-html',
        'text-encode-for-url',
        'text-length',
        'text-lowercase',
        'text-scramble',
        'text-split-raw',
        'text-split',
        'text-substring',
        'text-trim',
        'text-uppercase',
        'time',
        'timeout-duration',
        'top-currency-raw',
        'top-currency-user',
        'top-currency',
        'top-metadata-raw',
        'top-metadata-user',
        'top-metadata',
        'top-view-time-raw',
        'top-view-time',
        'uptime',
        'user-avatar-url',
        'user-badge-urls',
        'user-exists',
        'user-id-name',
        'user-id',
        'user-metadata-raw',
        'user-metadata',
        'user-roles-raw',
        'user-roles',
        'user',
        'username-array-raw',
        'username-array',
        'username',
        'video-duration',
        'view-time',
        'whisper-message',
        'word'
    ].forEach(filename => {
        const definition = require(`./builtin/${filename}`);
        replaceVariableManager.registerReplaceVariable(definition);
    });
};