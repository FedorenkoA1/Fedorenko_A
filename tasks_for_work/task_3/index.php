<?php

$parent = $modx->getOption('parent', $scriptProperties, 0);
$depth = $modx->getOption('depth', $scriptProperties, 2);

$c = $modx->newQuery('modResource');
$c->where(array(
    'parent' => $parent,
    'published' => true,
));
$c->sortby('menuindex', 'ASC');
$c->limit($depth);


$children = $modx->getCollection('modResource', $c);


$output = '<ul>';
foreach ($children as $child) {
    $output .= '<li><a href="' . $child->get('uri') . '">' . $child->get('pagetitle') . '</a>';
    

    $output .= getChildren($child->get('id'), $depth - 1);
    
    $output .= '</li>';
}
$output .= '</ul>';

return $output;

function getChildren($parentId, $depth) {
    global $modx;
    
    if ($depth <= 0) {
        return '';
    }
    
    $c = $modx->newQuery('modResource');
    $c->where(array(
        'parent' => $parentId,
        'published' => true,
    ));
    $c->sortby('menuindex', 'ASC');
    
    $children = $modx->getCollection('modResource', $c);
    
    if (empty($children)) {
        return '';
    }
    
    $output = '<ul>';
    foreach ($children as $child) {
        $output .= '<li><a href="' . $child->get('uri') . '">' . $child->get('pagetitle') . '</a>';
        $output .= getChildren($child->get('id'), $depth - 1);
        $output .= '</li>';
    }
    $output .= '</ul>';
    
    return $output;
}