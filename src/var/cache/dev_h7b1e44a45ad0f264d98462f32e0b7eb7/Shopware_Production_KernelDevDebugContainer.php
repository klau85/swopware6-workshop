<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\Container5VxxEVv\Shopware_Production_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/Container5VxxEVv/Shopware_Production_KernelDevDebugContainer.php') {
    touch(__DIR__.'/Container5VxxEVv.legacy');

    return;
}

if (!\class_exists(Shopware_Production_KernelDevDebugContainer::class, false)) {
    \class_alias(\Container5VxxEVv\Shopware_Production_KernelDevDebugContainer::class, Shopware_Production_KernelDevDebugContainer::class, false);
}

return new \Container5VxxEVv\Shopware_Production_KernelDevDebugContainer([
    'container.build_hash' => '5VxxEVv',
    'container.build_id' => '454a436f',
    'container.build_time' => 1652086839,
], __DIR__.\DIRECTORY_SEPARATOR.'Container5VxxEVv');
